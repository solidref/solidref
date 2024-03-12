#include <stdio.h>

// Base struct for Bird
typedef struct {
    void (*fly)();
} Bird;

// Function to simulate bird flying
void BirdFly() {
    printf("Bird is flying\n");
}

// Duck struct inheriting from Bird
typedef struct {
    Bird baseBird;
    void (*quack)();
} Duck;

// Function to simulate duck quacking
void DuckQuack() {
    printf("Duck is quacking\n");
}

// Penguin struct inheriting from Bird
typedef struct {
    Bird baseBird;
    void (*swim)();
} Goose;

// Function to simulate goose swimming
void GooseSwim() {
    printf("Goose is swimming\n");
}

// Function to make any bird fly
void makeBirdFly(Bird *bird) {
    bird->fly();
}

int main() {
    // Initialize duck with base class methods
    Duck duck;
    duck.baseBird.fly = BirdFly;
    duck.quack = DuckQuack;

    // Initialize goose with base class methods
    Goose goose;
    goose.baseBird.fly = BirdFly;
    goose.swim = GooseSwim;

    // Making duck and goose fly
    makeBirdFly((Bird*)&duck);    // Output: Bird is flying
    makeBirdFly((Bird*)&goose);   // Output: Bird is flying

    return 0;
}