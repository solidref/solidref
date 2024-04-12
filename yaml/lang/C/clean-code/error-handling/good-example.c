#include <stdio.h>
#include <stdlib.h>

// Function to parse user input to number
int parseUserInput(const char *input) {
    char *end;
    long result = strtol(input, &end, 10);

    // If input cannot be parsed to a number, end will not point to the terminal null byte of the input string
    if (*end != '\0') {
        fprintf(stderr, "Input cannot be parsed to a number.\n");
        exit(EXIT_FAILURE);
    }
    
    return (int)result;
}

int main() {
    // Try parsing user input
    // Use const char* for input simulation, in real scenarios, use fgets or similar for user input
    const char *input = "1024";
    int result;
    
    // Attempt to parse the input, will exit if parsing fails
    result = parseUserInput(input);
    printf("Parsed input: %d\n", result);
    
    return 0;
}