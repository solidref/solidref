#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

// Parses user input and returns number on success.
// On failure, it sets isError to 1.
int parseUserInput(const char *input, int *isError) {
    char *end;
    long result = strtol(input, &end, 10);

    // If input is not a number or contains extra characters
    if (*end != '\0' || errno == ERANGE) {
        *isError = 1;
        return 0; // Return value is ignored in case of error
    } else {
        *isError = 0;
        return (int)result; // Assuming the result fits into int
    }
}

int main() {
    const char *input = "1024";
    int isError;
    int result = parseUserInput(input, &isError);

    if (isError) {
        // Handling error: Failed to parse input
        fprintf(stderr, "Failed to parse input.\n");
    } else {
        // Successful parsing of input
        printf("Parsed input: %d\n", result);
    }

    return 0;
}