#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <unistd.h>
#include <sys/wait.h>

#define MAX_APPLICANTS 256
#define MAX_GROUPS 32
#define MAX_PER_GROUP 64
#define MSGSZ 4096

#define MAX_PROF 64
#define MAX_NAME 64
#define MAX_PHONE 32

typedef struct
{
    char profession[MAX_PROF];
    char name[MAX_NAME];
    int age;
    char phone[MAX_PHONE];
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

int read_applicants_for_simulation(Applicant arr[])
{
    FILE *f = fopen("applicants.txt", "r");
    if (!f)
    {
        printf("Hiba: Nem talalhato az applicants.txt fájl!\n");
        return 0;
    }

    char line[256];
    int n = 0;
    while (fgets(line, sizeof(line), f))
    {
        if (strlen(line) == 0)
            continue;

        char *p = strtok(line, ";");
        char *nme = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *ph = strtok(NULL, ";\n");

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

void run_transport_simulation()
{
    printf("\n--- Starting Transport Simulation ---\n");

    Applicant applicants[MAX_APPLICANTS];
    ProfGroup groups[MAX_GROUPS];

    int totalApplicants = read_applicants_for_simulation(applicants);
    if (totalApplicants == 0)
    {
        printf("No applicants found, or file unreadable.\n");
        return;
    }

    int groupCount = group_by_prof(applicants, totalApplicants, groups);

    printf("Total applicants: %d\n", totalApplicants);
    printf("Number of groups: %d\n\n", groupCount);
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
                    vehicle = "Minibus";
                }
                else
                {
                    passengers = (remaining >= 4) ? 4 : remaining;
                    vehicle = "Car";
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
                    snprintf(out, sizeof(out), "DONE! Going home, requesting the next one!\n");

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
                printf("[%s] departed: %d people, profession: %s\n", vehicle, passengers, groups[grpIdx].prof);
                printf("Passengers: %s\n", names);

                char reply[MSGSZ];
                read_msg(child_to_parent[k][0], reply);

                printf("[PARENT] Feedback from child: %s\n", reply);

                close(child_to_parent[k][0]);
                wait(NULL);

                remaining -= passengers;
                start += passengers;
            }
            usedGroups[grpIdx] = 1;
        }
    }

    printf("All delivery is completed.\n");
    printf("--- Transport Simulation Ended ---\n\n");
}

int show_menu(void)
{
    printf("|------- Gowest & Transport System ---------|\n");
    printf("|-------------------------------------------|\n");
    printf("|   1. Add a new applicant                  |\n");
    printf("|   2. List all applicants                  |\n");
    printf("|   3. List applicants by profession        |\n");
    printf("|   4. Modify applicant data                |\n");
    printf("|   5. Delete an applicant                  |\n");
    printf("|   6. Run: Transport Simulation            |\n");
    printf("|   7. Exit                                 |\n");
    printf("|-------------------------------------------|\n");

    return 0;
}

int add_applicant(void)
{
    Applicant new_applicant;
    FILE *file;

    file = fopen("applicants.txt", "r");
    if (!file)
    {
        printf("|-------------------------------------------\n");
        printf("| applicants.txt not found, creating new file...\n");
        printf("|-------------------------------------------\n");
    }
    else
    {
        fclose(file);
    }

    file = fopen("applicants.txt", "a");
    if (!file)
    {
        printf("\n|-------------------------------------------\n");
        printf("| Failed to open file!\n");
        printf("|-------------------------------------------\n\n");
        return -1;
    }

    printf("\nType the applicant's profession: ");
    scanf("%s", new_applicant.profession);
    printf("Type the applicant's name: ");
    scanf(" %[^\n]", new_applicant.name);
    printf("Type the applicant's age: ");
    scanf("%d", &new_applicant.age);
    printf("Type the applicant's phone number: ");
    scanf("%s", new_applicant.phone);

    fprintf(file, "%s;%s;%d;%s\n",
            new_applicant.profession,
            new_applicant.name,
            new_applicant.age,
            new_applicant.phone);

    fclose(file);
    printf("|-------------------------------------------\n");
    printf("| The applicant is successfully registered!\n");
    printf("|-------------------------------------------\n\n");
    return 0;
}

int list_all(void)
{
    FILE *file = fopen("applicants.txt", "r");
    if (!file)
    {
        printf("\n|-------------------------------------------\n");
        printf("Failed to open file!");
        printf("\n|-------------------------------------------\n\n");
        return -1;
    }

    char line[256];
    printf("\n|-------------------------------------------\n");
    printf("| List of all applicants:\n");
    printf("|-------------------------------------------\n");
    while (fgets(line, sizeof(line), file))
    {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phoneNumber = strtok(NULL, ";\n");

        if (profession && name && age && phoneNumber)
        {
            printf("| Profession: %s\n", profession);
            printf("| Name: %s\n", name);
            printf("| Age: %s\n", age);
            printf("| Phone Number: %s\n", phoneNumber);
            printf("|-------------------------------------------\n");
        }
    }

    fclose(file);
    return 0;
}

int list_by_profession(void)
{

    char search_profession[MAX_PROF];

    printf("\n| Type the profession to filter by: ");
    scanf("%s", search_profession);

    FILE *file = fopen("applicants.txt", "r");
    if (!file)
    {
        printf("\n|-------------------------------------------\n");
        printf("Failed to open file!");
        printf("\n|-------------------------------------------\n\n");
        return -1;
    }

    char line[256];
    int found = 0;
    printf("\n|-------------------------------------------\n");
    printf("| Applicants with profession '%s':\n", search_profession);
    printf("|-------------------------------------------\n");

    while (fgets(line, sizeof(line), file))
    {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phoneNumber = strtok(NULL, ";\n");

        if (profession && name && age && phoneNumber)
        {
            if (strcmp(profession, search_profession) == 0)
            {
                printf("| Profession: %s\n", profession);
                printf("| Name: %s\n", name);
                printf("| Age: %s\n", age);
                printf("| Phone Number: %s\n", phoneNumber);
                printf("|-------------------------------------------\n");
                found = 1;
            }
        }
    }
    return 0;
}

int modify_applicant(void)
{

    char search_name[MAX_NAME];
    printf("\nType the name of the applicant to modify: ");
    scanf(" %[^\n]", search_name);

    FILE *file = fopen("applicants.txt", "r");
    if (!file)
    {
        printf("Failed to open file!\n");
        return -1;
    }

    Applicant applicants[100];
    int count = 0;
    char line[256];
    while (fgets(line, sizeof(line), file))
    {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phone = strtok(NULL, ";\n");

        if (profession && name && age && phone)
        {
            strncpy(applicants[count].profession, profession, MAX_PROF);
            strncpy(applicants[count].name, name, MAX_NAME);
            applicants[count].age = atoi(age);
            strncpy(applicants[count].phone, phone, MAX_PHONE);
            count++;
        }
    }
    fclose(file);

    int found = -1;
    for (int i = 0; i < count; i++)
    {
        if (strcmp(applicants[i].name, search_name) == 0)
        {
            found = i;
            break;
        }
    }

    if (found == -1)
    {
        printf("Applicant with name '%s' not found.\n", search_name);
        return 0;
    }

    Applicant *a = &applicants[found];
    char input[128];

    printf("\n|-----------------------\n| Current data:\n|-----------------------\n| Profession: %s\n|-----------------------\n| Name: %s\n|-----------------------\n| Age: %d\n|-----------------------\n| Phone: %s\n|-----------------------\n",
           a->profession, a->name, a->age, a->phone);

    printf("New profession (Enter = keep '%s'): ", a->profession);
    fgets(input, sizeof(input), stdin);
    fgets(input, sizeof(input), stdin);
    if (input[0] != '\n')
    {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->profession, input, MAX_PROF);
    }

    printf("New name (Enter = keep '%s'): ", a->name);
    fgets(input, sizeof(input), stdin);
    if (input[0] != '\n')
    {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->name, input, MAX_NAME);
    }

    printf("New age (Enter = keep '%d'): ", a->age);
    fgets(input, sizeof(input), stdin);
    if (input[0] != '\n')
    {
        a->age = atoi(input);
    }

    printf("New phone (Enter = keep '%s'): ", a->phone);
    fgets(input, sizeof(input), stdin);
    if (input[0] != '\n')
    {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->phone, input, MAX_PHONE);
    }

    file = fopen("applicants.txt", "w");
    if (!file)
    {
        printf("Failed to open file for writing!\n");
        return -1;
    }

    for (int i = 0; i < count; i++)
    {
        fprintf(file, "%s;%s;%d;%s\n",
                applicants[i].profession,
                applicants[i].name,
                applicants[i].age,
                applicants[i].phone);
    }
    fclose(file);

    printf("\n|-------------------------------------------\n");
    printf("| Applicant data updated successfully!");
    printf("\n|-------------------------------------------\n\n");

    return 0;
}

int delete_applicant(void)
{

    char search_name[MAX_NAME];
    printf("\n| Type the name of the applicant to delete: ");
    scanf(" %[^\n]", search_name);

    FILE *file = fopen("applicants.txt", "r");
    if (!file)
    {
        printf("\n|-------------------------------------------\n");
        printf("| Failed to open file!");
        printf("\n|-------------------------------------------\n");
        return -1;
    }

    Applicant applicants[100];
    int count = 0;
    char line[256];
    while (fgets(line, sizeof(line), file))
    {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phone = strtok(NULL, ";\n");

        if (profession && name && age && phone)
        {
            strncpy(applicants[count].profession, profession, MAX_PROF);
            strncpy(applicants[count].name, name, MAX_NAME);
            applicants[count].age = atoi(age);
            strncpy(applicants[count].phone, phone, MAX_PHONE);
            count++;
        }
    }
    fclose(file);

    int found = -1;
    for (int i = 0; i < count; i++)
    {
        if (strcmp(applicants[i].name, search_name) == 0)
        {
            found = i;
            break;
        }
    }

    if (found == -1)
    {
        printf("\n|-------------------------------------------\n");
        printf("| Applicant with name '%s' not found.", search_name);
        printf("\n|-------------------------------------------\n\n");
        return 0;
    }

    Applicant *a = &applicants[found];

    printf("\n|-----------------------\n| Current data:\n|-----------------------\n| Profession: %s\n|-----------------------\n| Name: %s\n|-----------------------\n| Age: %d\n|-----------------------\n| Phone: %s\n|-----------------------\n",
           a->profession, a->name, a->age, a->phone);

    char confirm;
    printf("\nAre you sure you want to delete this applicant? (y/n): ");
    scanf(" %c", &confirm);

    if (confirm != 'y' && confirm != 'Y')
    {
        printf("\n|-------------------------------------------\n");
        printf("| Deletion cancelled.");
        printf("\n|-------------------------------------------\n\n");
        return 0;
    }

    for (int i = found; i < count - 1; i++)
    {
        applicants[i] = applicants[i + 1];
    }
    count--;

    file = fopen("applicants.txt", "w");
    if (!file)
    {
        printf("\n|-------------------------------------------\n");
        printf("| Failed to open file for writing!");
        printf("\n|-------------------------------------------\n");
        return -1;
    }

    for (int i = 0; i < count; i++)
    {
        fprintf(file, "%s;%s;%d;%s\n",
                applicants[i].profession,
                applicants[i].name,
                applicants[i].age,
                applicants[i].phone);
    }
    fclose(file);

    printf("\n|-------------------------------------------\n");
    printf("| Applicant successfully deleted!");
    printf("\n|-------------------------------------------\n\n");
    return 0;
}

int main(void)
{

    while (1)
    {
        show_menu();
        int choice;
        printf("|   Choose an option: ");
        scanf("%d", &choice);
        printf("|-------------------------------------------\n");

        switch (choice)
        {
        case 1:
            add_applicant();
            break;
        case 2:
            list_all();
            break;
        case 3:
            list_by_profession();
            break;
        case 4:
            modify_applicant();
            break;
        case 5:
            delete_applicant();
            break;
        case 6:
            run_transport_simulation();
            break;
        case 7:
            printf("\nGoodbye!\n");
            exit(0);
        default:
            printf("\nUnknown input (Try: 1, 2, 3, 4, 5, 6 or 7)\n");
        }
    }
    return 0;
}