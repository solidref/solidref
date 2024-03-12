#include <stdio.h>
#include <stdlib.h>

/* Forward declarations for the functions and types */
typedef struct Chair Chair;
typedef struct Table Table;
typedef struct FurnitureFactory FurnitureFactory;

/* Abstract Chair */
struct Chair {
    void (*sitOn)(Chair*);
};

/* Abstract Table */
struct Table {
    void (*putOn)(Table*);
};

/* Abstract FurnitureFactory */
struct FurnitureFactory {
    Chair* (*createChair)();
    Table* (*createTable)();
};

/* Concrete Modern Chair */
typedef struct {
    Chair chair;
} ModernChair;

void sitOnModernChair(Chair* c) {
    printf("Sitting on a modern chair.\n");
}

/* Concrete Vintage Chair */
typedef struct {
    Chair chair;
} VintageChair;

void sitOnVintageChair(Chair* c) {
    printf("Sitting on a vintage chair.\n");
}

/* Concrete Modern Table */
typedef struct {
    Table table;
} ModernTable;

void putOnModernTable(Table* t) {
    printf("Putting something on a modern table.\n");
}

/* Concrete Vintage Table */
typedef struct {
    Table table;
} VintageTable;

void putOnVintageTable(Table* t) {
    printf("Putting something on a vintage table.\n");
}

/* Concrete Factory: Modern Furniture Factory */
typedef struct {
    FurnitureFactory factory;
} ModernFurnitureFactory;

Chair* createModernChair() {
    ModernChair* chair = (ModernChair*)malloc(sizeof(ModernChair));
    chair->chair.sitOn = sitOnModernChair;
    return (Chair*) chair;
}

Table* createModernTable() {
    ModernTable* table = (ModernTable*)malloc(sizeof(ModernTable));
    table->table.putOn = putOnModernTable;
    return (Table*) table;
}

/* Concrete Factory: Vintage Furniture Factory */
typedef struct {
    FurnitureFactory factory;
} VintageFurnitureFactory;

Chair* createVintageChair() {
    VintageChair* chair = (VintageChair*)malloc(sizeof(VintageChair));
    chair->chair.sitOn = sitOnVintageChair;
    return (Chair*) chair;
}

Table* createVintageTable() {
    VintageTable* table = (VintageTable*)malloc(sizeof(VintageTable));
    table->table.putOn = putOnVintageTable;
    return (Table*) table;
}

/* Client code */
void createFurniture(FurnitureFactory* factory) {
    Chair* chair = factory->createChair();
    Table* table = factory->createTable();

    printf("Created furniture:\n");
    chair->sitOn(chair);
    table->putOn(table);

    free(chair);
    free(table);
}

int main(int argc, char* argv[]) {
    /* Initializing the abstract factories */
    ModernFurnitureFactory modernFactory = {{createModernChair, createModernTable}};
    VintageFurnitureFactory vintageFactory = {{createVintageChair, createVintageTable}};

    printf("Creating modern furniture:\n");
    createFurniture((FurnitureFactory*)&modernFactory);

    printf("\nCreating vintage furniture:\n");
    createFurniture((FurnitureFactory*)&vintageFactory);

    return 0;
}