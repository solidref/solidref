#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to split text into lines
char **splitIntoLines(char *text, int *count) {
    char **lines = NULL;
    char *line;
    int i = 0;

    // Using strtok to split string by newline
    line = strtok(text, "\n");
    while (line != NULL) {
        lines = (char **)realloc(lines, sizeof(char *) * (i + 1));
        lines[i] = (char *)malloc(sizeof(char) * (strlen(line) + 1));
        strcpy(lines[i], line);
        i++;
        line = strtok(NULL, "\n");
    }
    *count = i;
    return lines;
}

// Function to process lines, e.g., convert to uppercase
void processLines(char **lines, int count) {
    // Imagine complex processing here
    for (int i = 0; i < count; i++) {
        for (int j = 0; lines[i][j]; j++) {
            lines[i][j] = toupper(lines[i][j]);
        }
    }
}

// Function to print lines
void printLines(char **lines, int count) {
    for (int i = 0; i < count; i++) {
        printf("%s\n", lines[i]);
    }
}

// Function to process data
void processData(char *input) {
    int count;
    char **lines = splitIntoLines(input, &count);
    processLines(lines, count);
    printLines(lines, count);
    for(int i = 0; i < count; i++) {
        free(lines[i]);
    }
    free(lines);
}

int main() {
    // Replace "your input string here" with your actual multiline string
    char input[] = "Line 1\nLine 2\nLine 3";
    processData(input);
    return 0;
}