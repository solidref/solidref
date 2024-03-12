#include <stdio.h>

/* Defining a struct for Bird with a function pointer fly as part of its structure. */
typedef struct {
    void (*fly)(void);
} Bird;

/* Bird's fly function, which would normally enable a bird to fly. */
void birdFly() {
    /* ... Flying logic for general birds */
    printf("This bird flies.\n");
}

/* Ostrich does not actually fly, so we create a different function for it. */
void ostrichFly() {
    /* Throwing error is not a C idiom, so we'll handle it differently. */
    printf("Can't fly. This is an ostrich.\n");
}

int main() {
    /* Instantiate a Bird and an Ostrich (technically still a Bird struct but with different behavior). */
    Bird aBird;
    Bird anOstrich;

    aBird.fly = birdFly; /* setting function pointer for a general bird */
    anOstrich.fly = ostrichFly; /* setting function pointer to illustrate ostrich's inability to fly */
    
    /* Demonstrating behavior */
    aBird.fly(); /* Expected to fly */
    anOstrich.fly(); /* Expected to not fly and instead print a message. */
    
    return 0;
}