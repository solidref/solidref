#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char *cpu;
    int ram;
    int storage;
    char *gpu;
    int screenSize;
} Computer;

// Function to display the specifications of the computer
void displaySpecs(Computer *computer) {
    printf("CPU: %s\n", computer->cpu);
    printf("RAM: %d GB\n", computer->ram);
    printf("Storage: %d GB\n", computer->storage);
    printf("GPU: %s\n", computer->gpu);
    printf("Screen Size: %d inches\n", computer->screenSize);
}

typedef struct {
    void (*setCPU)(Computer **, char*);
    void (*setRAM)(Computer **, int);
    void (*setStorage)(Computer **, int);
    void (*setGPU)(Computer **, char*);
    void (*setScreenSize)(Computer **, int);
    Computer* (*getResult)(Computer **);
} ComputerBuilder;

void setCPU(Computer **computer, char *cpu) {
    (*computer)->cpu = strdup(cpu);
}

void setRAM(Computer **computer, int ram) {
    (*computer)->ram = ram;
}

void setStorage(Computer **computer, int storage) {
    (*computer)->storage = storage;
}

void setGPU(Computer **computer, char *gpu) {
    (*computer)->gpu = strdup(gpu);
}

void setScreenSize(Computer **computer, int screenSize) {
    (*computer)->screenSize = screenSize;
}

Computer* getResult(Computer **computer) {
    return *computer;
}

// Initializes a new computer with default values
Computer* newComputer() {
    Computer *comp = (Computer *)malloc(sizeof(Computer));
    comp->cpu = "";
    comp->ram = 0;
    comp->storage = 0;
    comp->gpu = "";
    comp->screenSize = 0;
    return comp;
}

// Initializes the ComputerBuilder for a computer with function pointers to the setters
ComputerBuilder* newComputerBuilder() {
    ComputerBuilder *builder = (ComputerBuilder *)malloc(sizeof(ComputerBuilder));
    builder->setCPU = setCPU;
    builder->setRAM = setRAM;
    builder->setStorage = setStorage;
    builder->setGPU = setGPU;
    builder->setScreenSize = setScreenSize;
    builder->getResult = getResult;
    return builder;
}

// Director that constructs the computer using the builder
void constructGamingComputer(ComputerBuilder *builder, Computer **computer) {
    builder->setCPU(computer, "Intel Core i9");
    builder->setRAM(computer, 32);
    builder->setStorage(computer, 1000);
    builder->setGPU(computer, "NVIDIA GeForce RTX 3080");
    builder->setScreenSize(computer, 27);
}

// Main function demonstrating the builder pattern
int main() {
    Computer *gamingComputer = newComputer();
    ComputerBuilder *builder = newComputerBuilder();
    constructGamingComputer(builder, &gamingComputer);
    printf("Gaming Computer Specifications:\n");
    displaySpecs(gamingComputer);

    // Clean up
    free(gamingComputer->cpu);
    free(gamingComputer->gpu);
    free(gamingComputer);
    free(builder);

    return 0;
}