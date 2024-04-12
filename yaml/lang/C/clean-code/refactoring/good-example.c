#include <stdio.h>
#include <stdlib.h>

// Define a structure to hold user data
typedef struct {
    int id;
    char name[100];
    char email[100];
} User;

// Function prototype to extract emails from users
void getEmails(User users[], int size, char emails[][100]);

int main() {
    // Example users array
    User users[2] = {
        {1, "User One", "userone@example.com"},
        {2, "User Two", "usertwo@example.com"}
    };

    // Array to hold the emails
    char emails[2][100];

    // Extract the emails
    getEmails(users, 2, emails);

    // Print the emails
    for (int i = 0; i < 2; i++) {
        printf("%s\n", emails[i]);
    }

    return 0;
}

// Extracts email addresses from an array of users and fills the passed email array
void getEmails(User users[], int size, char emails[][100]) {
    for (int i = 0; i < size; i++) {
        strcpy(emails[i], users[i].email);
    }
}