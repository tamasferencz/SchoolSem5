#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_PROF 32
#define MAX_NAME 64
#define MAX_PHONE 15

//--------------------------------------------------------------------------
typedef struct {
    char profession[MAX_PROF];
    char name[MAX_NAME];
    int age;
    char phoneNumber[MAX_PHONE];
} Applicant;
//--------------------------------------------------------------------------
int show_menu(void) {
    printf("|------- Gowest Applicants Registry --------|\n");
    printf("|-------------------------------------------|\n");
    printf("|   1. Add a new applicant                  |\n");
    printf("|   2. List all applicants                  |\n");
    printf("|   3. List applicants by profession        |\n");
    printf("|   4. Modify applicant data                |\n");
    printf("|   5. Delete an applicant                  |\n");
    printf("|   6. Exit                                 |\n");
    printf("|-------------------------------------------|\n");

    return 0;
}
//--------------------------------------------------------------------------
int add_applicant(void) {
    Applicant new_applicant;
    FILE *file;

    file = fopen("applicants.txt", "r");
    if(!file) {
        printf("|-------------------------------------------\n");
        printf("| applicants.txt not found, creating new file...\n");
        printf("|-------------------------------------------\n");
    } else {
        fclose(file);
    }

    file = fopen("applicants.txt", "a");
    if(!file) {
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
    scanf("%s", new_applicant.phoneNumber);

    fprintf(file, "%s;%s;%d;%s\n",
            new_applicant.profession,
            new_applicant.name,
            new_applicant.age,
            new_applicant.phoneNumber);

    fclose(file);
    printf("|-------------------------------------------\n");
    printf("| The applicant is successfully registered!\n");
    printf("|-------------------------------------------\n\n");
    return 0;
}
//--------------------------------------------------------------------------
int list_all(void) {
    FILE *file = fopen("applicants.txt", "r");
    if(!file) {
        printf("\n|-------------------------------------------\n");
        printf("Failed to open file!");
        printf("\n|-------------------------------------------\n\n");
        return -1;
    }

    char line[256];
    printf("\n|-------------------------------------------\n");
    printf("| List of all applicants:\n");
    printf("|-------------------------------------------\n");
    while(fgets(line, sizeof(line), file)) {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phoneNumber = strtok(NULL, ";");

        if(profession && name && age && phoneNumber) {
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
//--------------------------------------------------------------------------
int list_by_profession(void) {

    char search_profession[MAX_PROF];

    printf("\n| Type the profession to filter by: ");
    scanf("%s", search_profession);

    FILE *file = fopen("applicants.txt", "r");
    if(!file) {
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

    while(fgets(line, sizeof(line), file)) {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phoneNumber = strtok(NULL, ";");

        if(profession && name && age && phoneNumber) {
            if(strcmp(profession, search_profession) == 0) {
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
//--------------------------------------------------------------------------
int modify_applicant(void) {

    char search_name[MAX_NAME];
    printf("\nType the name of the applicant to modify: ");
    scanf(" %[^\n]", search_name);

    FILE *file = fopen("applicants.txt", "r");
    if(!file) {
        printf("Failed to open file!\n");
        return -1;
    }

    Applicant applicants[100];
    int count = 0;
    char line[256];
    while(fgets(line, sizeof(line), file)) {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phone = strtok(NULL, ";\n");

        if(profession && name && age && phone) {
            strncpy(applicants[count].profession, profession, MAX_PROF);
            strncpy(applicants[count].name, name, MAX_NAME);
            applicants[count].age = atoi(age);
            strncpy(applicants[count].phoneNumber, phone, MAX_PHONE);
            count++;
        }
    }
    fclose(file);

    int found = -1;
    for(int i = 0; i < count; i++) {
        if(strcmp(applicants[i].name, search_name) == 0) {
            found = i;
            break;
        }
    }

    if(found == -1) {
        printf("Applicant with name '%s' not found.\n", search_name);
        return 0;
    }

    Applicant *a = &applicants[found];
    char input[128];

    printf("\n|-----------------------\n| Current data:\n|-----------------------\n| Profession: %s\n|-----------------------\n| Name: %s\n|-----------------------\n| Age: %d\n|-----------------------\n| Phone: %s\n|-----------------------\n",
           a->profession, a->name, a->age, a->phoneNumber);

    printf("New profession (Enter = keep '%s'): ", a->profession);
    fgets(input, sizeof(input), stdin);
    fgets(input, sizeof(input), stdin);
    if(input[0] != '\n') {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->profession, input, MAX_PROF);
    }

    printf("New name (Enter = keep '%s'): ", a->name);
    fgets(input, sizeof(input), stdin);
    if(input[0] != '\n') {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->name, input, MAX_NAME);
    }

    printf("New age (Enter = keep '%d'): ", a->age);
    fgets(input, sizeof(input), stdin);
    if(input[0] != '\n') {
        a->age = atoi(input);
    }

    printf("New phone (Enter = keep '%s'): ", a->phoneNumber);
    fgets(input, sizeof(input), stdin);
    if(input[0] != '\n') {
        input[strcspn(input, "\n")] = 0;
        strncpy(a->phoneNumber, input, MAX_PHONE);
    }

    file = fopen("applicants.txt", "w");
    if(!file) {
        printf("Failed to open file for writing!\n");
        return -1;
    }

    for(int i = 0; i < count; i++) {
        fprintf(file, "%s;%s;%d;%s\n",
                applicants[i].profession,
                applicants[i].name,
                applicants[i].age,
                applicants[i].phoneNumber);
    }
    fclose(file);

    printf("\n|-------------------------------------------\n");
    printf("| Applicant data updated successfully!");
    printf("\n|-------------------------------------------\n\n");

    return 0;
}
//--------------------------------------------------------------------------
int delete_applicant(void) {

    char search_name[MAX_NAME];
    printf("\n| Type the name of the applicant to delete: ");
    scanf(" %[^\n]", search_name);

    FILE *file = fopen("applicants.txt", "r");
    if(!file) {
        printf("\n|-------------------------------------------\n");
        printf("| Failed to open file!");
        printf("\n|-------------------------------------------\n");
        return -1;
    }

    Applicant applicants[100];
    int count = 0;
    char line[256];
    while(fgets(line, sizeof(line), file)) {
        char *profession = strtok(line, ";");
        char *name = strtok(NULL, ";");
        char *age = strtok(NULL, ";");
        char *phone = strtok(NULL, ";\n");

        if(profession && name && age && phone) {
            strncpy(applicants[count].profession, profession, MAX_PROF);
            strncpy(applicants[count].name, name, MAX_NAME);
            applicants[count].age = atoi(age);
            strncpy(applicants[count].phoneNumber, phone, MAX_PHONE);
            count++;
        }
    }
    fclose(file);

    int found = -1;
    for(int i = 0; i < count; i++) {
        if(strcmp(applicants[i].name, search_name) == 0) {
            found = i;
            break;
        }
    }

    if(found == -1) {
        printf("\n|-------------------------------------------\n");
        printf("| Applicant with name '%s' not found.", search_name);
        printf("\n|-------------------------------------------\n\n");
        return 0;
    }

    Applicant *a = &applicants[found];
    char input[128];

    printf("\n|-----------------------\n| Current data:\n|-----------------------\n| Profession: %s\n|-----------------------\n| Name: %s\n|-----------------------\n| Age: %d\n|-----------------------\n| Phone: %s\n|-----------------------\n",
           a->profession, a->name, a->age, a->phoneNumber);

    char confirm;
    printf("\nAre you sure you want to delete this applicant? (y/n): ");
    scanf(" %c", &confirm);

    if(confirm != 'y' && confirm != 'Y') {
        printf("\n|-------------------------------------------\n");
        printf("| Deletion cancelled.");
        printf("\n|-------------------------------------------\n\n");
        return 0;
    }

    for(int i = found; i < count - 1; i++) {
        applicants[i] = applicants[i + 1];
    }
    count--;

    file = fopen("applicants.txt", "w");
    if(!file) {
        printf("\n|-------------------------------------------\n");
        printf("| Failed to open file for writing!");
        printf("\n|-------------------------------------------\n");
        return -1;
    }

    for(int i = 0; i < count; i++) {
        fprintf(file, "%s;%s;%d;%s\n",
                applicants[i].profession,
                applicants[i].name,
                applicants[i].age,
                applicants[i].phoneNumber);
    }
    fclose(file);

    printf("\n|-------------------------------------------\n");
    printf("| Applicant successfully deleted!");
    printf("\n|-------------------------------------------\n\n");
    return 0;
}
//--------------------------------------------------------------------------

int main(void) {

    while(1) {
        show_menu();
        int choice;
        printf("|   Choose an option: ");
        scanf("%d", &choice);
        printf("|-------------------------------------------\n");

        switch(choice) {
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
            printf("\nGoodbye!\n");
            exit(1);
        default:
            printf("\nUnknown input (Try: 1, 2, 3, 4, 5 or 6)\n");
        }
    }
    return 0;
}