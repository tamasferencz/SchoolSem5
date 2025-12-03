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
    int parent_to_child[2][2], child_to_parent[2][2];
    pid_t child_pid[2];

    for (int i = 0; i < 2; ++i)
    {
        if (pipe(parent_to_child[i]) == -1)
            errExit("pipe");
        if (pipe(child_to_parent[i]) == -1)
            errExit("pipe");
    }

    const char *questions[3] = {
        "Hany alma van az asztalon? (1-5)",
        "Hany labda gurult a kertbe? (1-5)",
        "Hany csillag van az egen? (1-5)"};
    int answers[3] = {3, 1, 5};
    const char *masked_names_A[3] = {"Malac", "Szamar", "Zebra"};
    const char *masked_names_B[3] = {"Fecske", "Golya", "Sas"};
    int is_correct[2] = {0, 0};

    for (int i = 0; i < 2; ++i)
    {
        child_pid[i] = fork();
        if (child_pid[i] < 0)
            errExit("fork");

        if (child_pid[i] == 0)
        {
            for (int j = 0; j < 2; ++j)
            {
                if (j != i)
                {
                    close(parent_to_child[j][0]);
                    close(parent_to_child[j][1]);
                    close(child_to_parent[j][0]);
                    close(child_to_parent[j][1]);
                }
            }

            close(parent_to_child[i][1]);
            close(child_to_parent[i][0]);

            srand((unsigned int)(time(NULL) ^ (getpid() << 16)));

            char buf[MSGSZ];
            read_msg(parent_to_child[i][0], buf);

            const char *myname = (i == 0) ? masked_names_A[rand_range(0, 2)] : masked_names_B[rand_range(0, 2)];
            write_msg(child_to_parent[i][1], myname);

            read_msg(parent_to_child[i][0], buf);

            if (strlen(buf) > 0)
            {
                int answer = rand_range(1, 5);
                char ansbuf[MSGSZ];
                snprintf(ansbuf, MSGSZ, "%d", answer);
                write_msg(child_to_parent[i][1], ansbuf);
            }

            if (i == 1)
            {
                int bet = rand_range(0, 1); // 0 = rossz, 1 = jó
                char betbuf[MSGSZ];
                snprintf(betbuf, MSGSZ, "BET:%d", bet);
                write_msg(child_to_parent[i][1], betbuf);
            }

            close(parent_to_child[i][0]);
            close(child_to_parent[i][1]);
            _exit(0);
        }
    }

    for (int i = 0; i < 2; ++i)
    {
        close(parent_to_child[i][0]);
        close(child_to_parent[i][1]);
    }

    srand((unsigned int)time(NULL));

    header("Jatekosok erkezese");
    printf("[Szulo] Meghivom a jatekosokat a szinpadra.\n");
    for (int i = 0; i < 2; ++i)
        write_msg(parent_to_child[i][1], "ALARCOT");

    char child_name[2][MSGSZ];
    read_msg(child_to_parent[0][0], child_name[0]);
    read_msg(child_to_parent[1][0], child_name[1]);

    printf("[Gyerek1] Alarcosan: %s\n", child_name[0]);
    printf("[Gyerek2] Alarcosan: %s\n", child_name[1]);

    header("Elso kerdes");
    int question_index = rand_range(0, 2);
    printf("[Szulo] A kerdes: %s (helyes: %d)\n", questions[question_index], answers[question_index]);

    for (int i = 0; i < 2; ++i)
        write_msg(parent_to_child[i][1], questions[question_index]);

    char ans_buf[2][MSGSZ];
    read_msg(child_to_parent[0][0], ans_buf[0]);
    read_msg(child_to_parent[1][0], ans_buf[1]);

    int ans_val[2];
    ans_val[0] = atoi(ans_buf[0]);
    ans_val[1] = atoi(ans_buf[1]);

    printf("[Gyerek1 - %s] Valasz: %d\n", child_name[0], ans_val[0]);
    printf("[Gyerek2 - %s] Valasz: %d\n", child_name[1], ans_val[1]);

    is_correct[0] = (ans_val[0] == answers[question_index]);
    is_correct[1] = (ans_val[1] == answers[question_index]);

    printf("[Gyerek1] Eredmeny: %s\n", is_correct[0] ? "MIKULAS" : "VIRGACS");
    printf("[Gyerek2] Eredmeny: %s\n", is_correct[1] ? "MIKULAS" : "VIRGACS");

    header("Masodik kor");

    char bet_buf[MSGSZ];
    read_msg(child_to_parent[1][0], bet_buf);

    int bet_val = -1;
    if (strncmp(bet_buf, "BET:", 4) == 0)
        bet_val = atoi(bet_buf + 4);

    printf("[Szulo] Az elso jatekos kerdese: %s\n", questions[question_index]);
    printf("[Szulo] Az elso jatekos valasza: %d (%s)\n", ans_val[0], is_correct[0] ? "jo" : "rossz");
    if (bet_val != -1)
        printf("[Gyerek2] Tippje: %d\n", bet_val);
    if (bet_val == is_correct[0])
        printf("[Gyerek2] Jutalom: MIKULAS\n");
    else
        printf("[Gyerek2] Jutalom: VIRGACS\n");

    for (int i = 0; i < 2; ++i)
    {
        close(parent_to_child[i][1]);
        close(child_to_parent[i][0]);
    }

    for (int i = 0; i < 2; ++i)
        wait(NULL);

    return 0;
}