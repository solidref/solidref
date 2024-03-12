#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Define the structure for a support handler */
struct SupportHandler;
typedef struct SupportHandler SupportHandler;

struct SupportHandler {
    SupportHandler* nextHandler;
    char* (*handleRequest)(SupportHandler* self, const char* request);
};

/* Forward declaration of functions to set the next handler and handle requests */
void setNextHandler(SupportHandler* handler, SupportHandler* next);
char* handleRequest(SupportHandler* handler, const char* request);

/* Level 1 Support */
char* Level1Support_handleRequest(SupportHandler* self, const char* request) {
    if (strstr(request, "basic")) {
        return "Level 1 Support: Issue resolved at basic level.";
    } else if (self->nextHandler) {
        return self->nextHandler->handleRequest(self->nextHandler, request);
    } else {
        return NULL;
    }
}

SupportHandler* Level1Support_new() {
    SupportHandler* handler = (SupportHandler*)malloc(sizeof(SupportHandler));
    if (!handler) return NULL;
    handler->nextHandler = NULL;
    handler->handleRequest = Level1Support_handleRequest;
    return handler;
}

/* Level 2 Support */
char* Level2Support_handleRequest(SupportHandler* self, const char* request) {
    if (strstr(request, "advanced")) {
        return "Level 2 Support: Issue resolved at advanced level.";
    } else if (self->nextHandler) {
        return self->nextHandler->handleRequest(self->nextHandler, request);
    } else {
        return NULL;
    }
}

SupportHandler* Level2Support_new() {
    SupportHandler* handler = (SupportHandler*)malloc(sizeof(SupportHandler));
    if (!handler) return NULL;
    handler->nextHandler = NULL;
    handler->handleRequest = Level2Support_handleRequest;
    return handler;
}

/* Level 3 Support */
char* Level3Support_handleRequest(SupportHandler* self, const char* request) {
    if (strstr(request, "bug")) {
        return "Level 3 Support: Issue resolved at development level.";
    } else {
        return "Level 3 Support: Unable to resolve the issue.";
    }
}

SupportHandler* Level3Support_new() {
    SupportHandler* handler = (SupportHandler*)malloc(sizeof(SupportHandler));
    if (!handler) return NULL;
    handler->nextHandler = NULL;
    handler->handleRequest = Level3Support_handleRequest;
    return handler;
}

void setNextHandler(SupportHandler* handler, SupportHandler* next) {
    if (handler) {
        handler->nextHandler = next;
    }
}

/* Client code simulates support requests */
int main() {
    SupportHandler* level1 = Level1Support_new();
    SupportHandler* level2 = Level2Support_new();
    SupportHandler* level3 = Level3Support_new();

    setNextHandler(level1, level2);
    setNextHandler(level2, level3);

    const char* request1 = "Fix basic login issue";
    const char* request2 = "Debug advanced performance problem";
    const char* request3 = "Investigate bug causing application crash";

    printf("%s\n", level1->handleRequest(level1, request1));
    printf("%s\n", level1->handleRequest(level1, request2));
    printf("%s\n", level1->handleRequest(level1, request3));

    /* Cleanup */
    free(level1);
    free(level2);
    free(level3);

    return 0;
}

/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support
 * ticket system. In C, structs and function pointers are utilized to mimic object
 * oriented behaviors like inheritance and polymorphism. Each "SupportHandler" struct
 * represents different levels of support. Each handler decides whether it can handle a
 * request or should pass it to the next handler in the chain. Unlike the original example,
 * dynamic memory allocation is used for creating handlers, emphasizing C's manual memory
 * management.
 */