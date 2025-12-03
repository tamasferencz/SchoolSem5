#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>

#define MSGSZ 256

int rand_range(int lo, int hi)
{
    return lo + rand() % (hi - lo + 1);
}

void errExit(const char *msg)
{
    perror(msg);
    exit(EXIT_FAILURE);
}

void write_msg(int fd, const char *s)
{
    char buf[MSGSZ];
    memset(buf, 0, MSGSZ);
    strncpy(buf, s, MSGSZ - 1);
    ssize_t w = write(fd, buf, MSGSZ);
    if (w != MSGSZ)
        errExit("write");
}

void read_msg(int fd, char *out)
{
    ssize_t r = 0;
    ssize_t got;
    char *p = out;
    while (r < MSGSZ)
    {
        got = read(fd, p + r, MSGSZ - r);
        if (got < 0)
            errExit("read");
        if (got == 0)
            break;
        r += got;
    }
    if (r <= 0)
        out[0] = '\0';
    out[MSGSZ - 1] = '\0';
}

void header(const char *title)
{
    printf("\n==================== %s ====================\n", title);
}

int main(void)
{
    int p2c[2][2], c2p[2][2];
    pid_t pid[2];

    for (int i = 0; i < 2; ++i)
    {
        if (pipe(p2c[i]) == -1)
            errExit("pipe");
        if (pipe(c2p[i]) == -1)
            errExit("pipe");
    }

    const char *qtext[3] = {
        "Hany alma van az asztalon? (1-5)",
        "Hany labda gurult a kertbe? (1-5)",
        "Hany csillag van az egen? (1-5)"};
    int qans[3] = {3, 1, 5};
    const char *namesA[3] = {"Malac", "Szamar", "Zebra"};
    const char *namesB[3] = {"Fecske", "Golya", "Sas"};
    int correct[2] = {0, 0};

    for (int i = 0; i < 2; ++i)
    {
        pid[i] = fork();
        if (pid[i] < 0)
            errExit("fork");

        if (pid[i] == 0)
        {
            for (int j = 0; j < 2; ++j)
            {
                if (j != i)
                {
                    close(p2c[j][0]);
                    close(p2c[j][1]);
                    close(c2p[j][0]);
                    close(c2p[j][1]);
                }
            }

            close(p2c[i][1]);
            close(c2p[i][0]);

            srand((unsigned int)(time(NULL) ^ (getpid() << 16)));

            char buf[MSGSZ];
            read_msg(p2c[i][0], buf);

            const char *myname = (i == 0) ? namesA[rand_range(0, 2)] : namesB[rand_range(0, 2)];
            write_msg(c2p[i][1], myname);

            read_msg(p2c[i][0], buf);

            if (strlen(buf) > 0)
            {
                int answer = rand_range(1, 5);
                char ansbuf[MSGSZ];
                snprintf(ansbuf, MSGSZ, "%d", answer);
                write_msg(c2p[i][1], ansbuf);
            }

            if (i == 1)
            {
                int bet = rand_range(0, 1); // 0 = rossz, 1 = jó
                char betbuf[MSGSZ];
                snprintf(betbuf, MSGSZ, "BET:%d", bet);
                write_msg(c2p[i][1], betbuf);
            }

            close(p2c[i][0]);
            close(c2p[i][1]);
            _exit(0);
        }
    }

    for (int i = 0; i < 2; ++i)
    {
        close(p2c[i][0]);
        close(c2p[i][1]);
    }

    srand((unsigned int)time(NULL));

    header("Jatekosok erkezese");
    printf("[Szulo] Meghivom a jatekosokat a szinpadra.\n");
    for (int i = 0; i < 2; ++i)
        write_msg(p2c[i][1], "ALARCOT");

    char name0[MSGSZ], name1[MSGSZ];
    read_msg(c2p[0][0], name0);
    read_msg(c2p[1][0], name1);

    printf("[Gyerek1] Alarcosan: %s\n", name0);
    printf("[Gyerek2] Alarcosan: %s\n", name1);

    header("Elso kerdes");
    int qidx = rand_range(0, 2);
    printf("[Szulo] A kerdes: %s (helyes: %d)\n", qtext[qidx], qans[qidx]);

    for (int i = 0; i < 2; ++i)
        write_msg(p2c[i][1], qtext[qidx]);

    char a0buf[MSGSZ], a1buf[MSGSZ];
    read_msg(c2p[0][0], a0buf);
    read_msg(c2p[1][0], a1buf);

    int a0 = atoi(a0buf);
    int a1 = atoi(a1buf);

    printf("[Gyerek1 - %s] Valasz: %d\n", name0, a0);
    printf("[Gyerek2 - %s] Valasz: %d\n", name1, a1);

    correct[0] = (a0 == qans[qidx]);
    correct[1] = (a1 == qans[qidx]);

    printf("[Gyerek1] Eredmeny: %s\n", correct[0] ? "MIKULAS" : "VIRGACS");
    printf("[Gyerek2] Eredmeny: %s\n", correct[1] ? "MIKULAS" : "VIRGACS");

    header("Masodik kor");

    char betbuf[MSGSZ];
    read_msg(c2p[1][0], betbuf);

    int bet = -1;
    if (strncmp(betbuf, "BET:", 4) == 0)
        bet = atoi(betbuf + 4);

    printf("[Szulo] Az elso jatekos kerdese: %s\n", qtext[qidx]);
    printf("[Szulo] Az elso jatekos valasza: %d (%s)\n", a0, correct[0] ? "jo" : "rossz");
    if (bet != -1)
        printf("[Gyerek2] Tippje: %d\n", bet);
    if (bet == correct[0])
        printf("[Gyerek2] Jutalom: MIKULAS\n");
    else
        printf("[Gyerek2] Jutalom: VIRGACS\n");

    for (int i = 0; i < 2; ++i)
    {
        close(p2c[i][1]);
        close(c2p[i][0]);
    }

    for (int i = 0; i < 2; ++i)
        wait(NULL);

    return 0;
}