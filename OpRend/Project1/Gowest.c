#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DATAFILE "applicants.dat"
#define MAX_PROF 32
#define MAX_NAME 64
#define MAX_PHONE 32

typedef struct {
    char name[MAX_NAME];
    char phone[MAX_PHONE];
    char profession[MAX_PROF];
    int age;
} Applicant;

typedef struct {
    Applicant *data;
    size_t size;
} AppList;

int main(void) {
    AppList L;
    init_list(&L);
    int loaded = load_applicants(&L);
    if(loaded < 0) fprintf(stderr, "Adatfajl betoltese kozben hiba tortent.\n");
    else if(loaded == 0) printf("Nincs mentett adat, ures \"adatbazis\".\n");
    else printf("Betoltve %d rekord.\n", loaded);

    while(1) {
        show_menu();
        int choice = read_int("Valasztas: ", 1, 6);
        switch(choice) {
        case 1:
            add_applicant(&L);
            break;
        case 2:
            list_all(&L);
            break;
        case 3:
            list_by_profession(&L);
            break;
        case 4:
            modify_applicant(&L);
            break;
        case 5:
            delete_applicant(&L);
            break;
        case 6:
            free_list(&L);
            printf("Viszontlatasra!\n");
            return 0;
        default:
            printf("Ismeretlen valasztas.\n");
        }
    }
    return 0;
}