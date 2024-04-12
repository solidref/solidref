#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void processData(const char* input) {
    char* inputCopy = strdup(input); // Duplicate the input to safely modify it
    char* line = strtok(inputCopy, "\n");
    while(line != NULL) {
        // Imagine complex processing here
        for(int i = 0; line[i]; i++) {
            line[i] = toupper(line[i]);
        }
        printf("%s\n", line);
        line = strtok(NULL, "\n");
    }
    free(inputCopy); // Free the duplicated string
}

int main() {
    // Example usage
    processData("first line\nsecond line");
    return 0;
}