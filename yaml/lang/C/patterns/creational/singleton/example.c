#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_HISTORY 1024
#define MAX_LOG_LENGTH 256

typedef struct {
    // Array of strings to store log history. In C, we manage memory allocation for strings dynamically.
    char *logHistory[MAX_HISTORY];
    int logCount;
} Logger;

// The Logger instance; static ensures it is only visible within this file.
static Logger *instance = NULL;

// Function declarations for the Logger. In C, we declare before defining these functions.
static Logger *Logger_getInstance();
static void Logger_log(Logger *self, const char *message);
static void Logger_getLogHistory(Logger *self);

// Private constructor equivalent in C. It initializes the Logger attributes.
static Logger *Logger_init() {
    Logger *logger = (Logger *)malloc(sizeof(Logger));
    if (logger) {
        for (int i = 0; i < MAX_HISTORY; i++) {
            logger->logHistory[i] = NULL;
        }
        logger->logCount = 0;
    }
    return logger;
}

// Singleton getInstance() equivalent in C.
static Logger *Logger_getInstance() {
    if (instance == NULL) {
        instance = Logger_init();
    }
    return instance;
}

// log() method equivalent in C.
static void Logger_log(Logger *self, const char *message) {
    if (self->logCount >= MAX_HISTORY) {
        printf("Log history full\n");
        return;
    }

    char *logEntry = (char *)malloc(MAX_LOG_LENGTH);
    time_t now = time(NULL);
    struct tm *t = localtime(&now);
    // Generating timestamp format similar to ISO string in the original example
    strftime(logEntry, MAX_LOG_LENGTH, "[%Y-%m-%dT%H:%M:%SZ] ", t);
    strcat(logEntry, message);

    self->logHistory[self->logCount++] = logEntry;
    printf("%s\n", logEntry);
}

// getLogHistory() method equivalent in C.
static void Logger_getLogHistory(Logger *self) {
    printf("Log History:\n");
    for (int i = 0; i < self->logCount; i++) {
        printf("%s\n", self->logHistory[i]);
    }
}

// Method to clean up dynamically allocated log history.
static void Logger_cleanup(Logger *logger) {
    if (logger) {
        for (int i = 0; i < logger->logCount; i++) {
            free(logger->logHistory[i]);
        }
        free(logger);
        instance = NULL;
    }
}

int main() {
    Logger *logger1 = Logger_getInstance();
    Logger *logger2 = Logger_getInstance();

    // Simulating original client code's output for comparison.
    printf("Logger instances are the same: %s\n", (logger1 == logger2) ? "true" : "false");

    Logger_log(logger1, "User logged in");
    Logger_log(logger2, "Data saved to database");

    Logger_getLogHistory(logger1);

    Logger_cleanup(logger1); // Clean-up to prevent memory leaks in this example
    return 0;
}