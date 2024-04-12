#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char *name;
    char *email;
} User;

char** getEmails(User* users, int userCount, int *emailCount) {
    // Allocate memory for storing email pointers; assume one email per user
    char** emails = malloc(userCount * sizeof(char*));
    if (emails == NULL) {
        // Handle memory allocation failure (simple handling for example's sake)
        fprintf(stderr, "Memory allocation failed\n");
        exit(EXIT_FAILURE);
    }

    for (int i = 0; i < userCount; i++) {
        emails[i] = users[i].email; // Directly assigning the email pointer
    }

    *emailCount = userCount; // Set the number of emails returned
    return emails;
}

// Example of usage
int main() {
    User users[3] = {
        {1, "Alice", "alice@example.com"},
        {2, "Bob", "bob@example.com"},
        {3, "Charlie", "charlie@example.com"}
    };

    int emailCount;
    char** emails = getEmails(users, 3, &emailCount);

    for (int i = 0; i < emailCount; i++) {
        printf("%s\n", emails[i]);
    }

    free(emails); // Clean up dynamically allocated memory

    return 0;
}