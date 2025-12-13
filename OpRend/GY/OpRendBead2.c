#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#define MAX_APPLICANTS 256
#define MAX_GROUPS 32
#define MAX_PER_GROUP 64
#define MSGSZ 4096

typedef struct
{
    char profession[64];
    char name[64];
    int age;
    char phone[32];
} Applicant;

typedef struct
{
    char prof[64];
    Applicant list[MAX_PER_GROUP];
    int count;
} ProfGroup;

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

int read_applicants(Applicant arr[])
{
    FILE *f = fopen("applicants.txt", "r");
    if (!f)
        errExit("applicants.txt");

    char line[256];
    int n = 0;
    while (fgets(line, sizeof(line), f))
    {
        if (strlen(line) == 0)
            continue;

        char *p = strtok(line, ";");
        char *nme = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *ph = strtok(NULL, ";");
        if (!p || !nme || !age || !ph)
            continue;

        strncpy(arr[n].profession, p, sizeof(arr[n].profession) - 1);
        arr[n].profession[sizeof(arr[n].profession) - 1] = '\0';
        strncpy(arr[n].name, nme, sizeof(arr[n].name) - 1);
        arr[n].name[sizeof(arr[n].name) - 1] = '\0';
        arr[n].age = atoi(age);
        strncpy(arr[n].phone, ph, sizeof(arr[n].phone) - 1);
        arr[n].phone[sizeof(arr[n].phone) - 1] = '\0';
        n++;
        if (n >= MAX_APPLICANTS)
            break;
    }
    fclose(f);
    return n;
}

int group_by_prof(Applicant arr[], int n, ProfGroup groups[])
{
    int g = 0;
    for (int i = 0; i < n; i++)
    {
        int idx = -1;
        for (int j = 0; j < g; j++)
        {
            if (strcmp(groups[j].prof, arr[i].profession) == 0)
            {
                idx = j;
                break;
            }
        }
        if (idx == -1)
        {
            if (g >= MAX_GROUPS)
                continue;
            idx = g++;
            strncpy(groups[idx].prof, arr[i].profession, sizeof(groups[idx].prof) - 1);
            groups[idx].prof[sizeof(groups[idx].prof) - 1] = '\0';
            groups[idx].count = 0;
        }
        if (groups[idx].count < MAX_PER_GROUP)
            groups[idx].list[groups[idx].count++] = arr[i];
    }
    return g;
}

int main()
{
    Applicant applicants[MAX_APPLICANTS];
    ProfGroup groups[MAX_GROUPS];

    int totalApplicants = read_applicants(applicants);
    int groupCount = group_by_prof(applicants, totalApplicants, groups);

    printf("Osszes jelentkezo: %d\n", totalApplicants);
    printf("Csoportok szama: %d\n\n", groupCount);
    fflush(stdout);

    int usedGroups[MAX_GROUPS] = {0};

    while (1)
    {
        int firstGroup = -1, secondGroup = -1;

        for (int i = 0; i < groupCount; i++)
        {
            if (!usedGroups[i] && groups[i].count >= 3)
            {
                if (firstGroup == -1 || groups[i].count > groups[firstGroup].count)
                    firstGroup = i;
            }
        }
        if (firstGroup == -1)
            break;

        for (int i = 0; i < groupCount; i++)
        {
            if (!usedGroups[i] && i != firstGroup && groups[i].count >= 3)
            {
                if (secondGroup == -1 || groups[i].count > groups[secondGroup].count)
                    secondGroup = i;
            }
        }

        int numDispatches = (secondGroup == -1) ? 1 : 2;

        pid_t children[2];
        int parent_to_child[2][2], child_to_parent[2][2];

        for (int k = 0; k < numDispatches; k++)
        {
            int grpIdx = (k == 0) ? firstGroup : secondGroup;
            int remaining = groups[grpIdx].count;
            int start = 0;

            while (remaining >= 3)
            {
                int passengers;
                const char *vehicle;

                if (remaining >= 5)
                {
                    passengers = (remaining >= 7) ? 7 : remaining;
                    vehicle = "Kisbusz";
                }
                else
                {
                    passengers = (remaining >= 4) ? 4 : remaining;
                    vehicle = "Szemelyauto";
                }

                if (pipe(parent_to_child[k]) == -1 || pipe(child_to_parent[k]) == -1)
                    errExit("pipe");

                children[k] = fork();
                if (children[k] < 0)
                    errExit("fork");

                if (children[k] == 0)
                {
                    close(parent_to_child[k][1]);
                    close(child_to_parent[k][0]);

                    char msg[MSGSZ];
                    read_msg(parent_to_child[k][0], msg);

                    char *names = msg;
                    int semicolons = 0;
                    for (int i = 0; msg[i] != '\0'; i++)
                    {
                        if (msg[i] == ';')
                        {
                            semicolons++;
                            if (semicolons == 3)
                            {
                                names = &msg[i + 1];
                                break;
                            }
                        }
                    }

                    write_msg(child_to_parent[k][1], names);

                    char out[MSGSZ];
                    snprintf(out, sizeof(out), "KESZ! Megyek haza, kerem a kovetkezot!\n");

                    write_msg(child_to_parent[k][1], out);

                    close(parent_to_child[k][0]);
                    close(child_to_parent[k][1]);
                    _exit(0);
                }

                close(parent_to_child[k][0]);
                close(child_to_parent[k][1]);

                char send[MSGSZ];
                int off = snprintf(send, sizeof(send), "PROF:%s;SIZE:%d;VEHICLE:%s;", groups[grpIdx].prof, passengers, vehicle);
                for (int t = start; t < start + passengers && t < groups[grpIdx].count; t++)
                    off += snprintf(send + off, sizeof(send) - off, "%s,", groups[grpIdx].list[t].name);

                write_msg(parent_to_child[k][1], send);
                close(parent_to_child[k][1]);

                char names[MSGSZ];
                read_msg(child_to_parent[k][0], names);
                printf("-----------------------------------------------------\n");
                printf("[%s] indult: %d fő, szakma: %s\n", vehicle, passengers, groups[grpIdx].prof);
                printf("Utasok: %s\n", names);

                char reply[MSGSZ];
                read_msg(child_to_parent[k][0], reply);

                printf("[SZÜLŐ] Visszajelzes gyerektol: %s\n", reply);

                close(child_to_parent[k][0]);
                wait(NULL);

                remaining -= passengers;
                start += passengers;
            }
            usedGroups[grpIdx] = 1;
        }
    }

    printf("Minden kiszallitas befejezodott.\n");
    return 0;
}
