#include <stdio.h>

// Forward declaration of the structures
typedef struct Breakfast Breakfast;
typedef struct OmeletteBreakfast OmeletteBreakfast;
typedef struct PancakeBreakfast PancakeBreakfast;

// Function pointers for polymorphic behavior
typedef void (*FuncPtrAddIngredients)(void);
typedef void (*FuncPtrCook)(void);

// Breakfast structure, acting as an abstract base class
struct Breakfast {
    FuncPtrAddIngredients addIngredients;
    FuncPtrCook cook;
};

// Concrete methods
void boilWater() {
    printf("Boiling water...\n");
}

void serve() {
    printf("Breakfast is served!\n");
}

// Template method
void prepare(Breakfast *breakfast) {
    boilWater();
    breakfast->addIngredients();
    breakfast->cook();
    serve();
}

// OmeletteBreakfast functions implementing the required behavior
void omeletteAddIngredients() {
    printf("Adding eggs, cheese, and vegetables to the pan.\n");
}

void omeletteCook() {
    printf("Cooking the omelette until golden brown.\n");
}

// PancakeBreakfast functions implementing the required behavior
void pancakeAddIngredients() {
    printf("Mixing flour, eggs, milk, and sugar to make the batter.\n");
}

void pancakeCook() {
    printf("Pouring the batter onto the griddle and flipping until cooked.\n");
}

// Function to create an OmeletteBreakfast
void initOmeletteBreakfast(OmeletteBreakfast *omeletteBreakfast) {
    if (omeletteBreakfast != NULL) {
        omeletteBreakfast->base.addIngredients = omeletteAddIngredients;
        omeletteBreakfast->base.cook = omeletteCook;
    }
}

// Function to create a PancakeBreakfast
void initPancakeBreakfast(PancakeBreakfast *pancakeBreakfast) {
    if (pancakeBreakfast != NULL) {
        pancakeBreakfast->base.addIngredients = pancakeAddIngredients;
        pancakeBreakfast->base.cook = pancakeCook;
    }
}

// OmeletteBreakfast structure
struct OmeletteBreakfast {
    Breakfast base;
};

// PancakeBreakfast structure
struct PancakeBreakfast {
    Breakfast base;
};

int main() {
    // Preparing Omelette Breakfast
    printf("Preparing Omelette Breakfast:\n");
    OmeletteBreakfast omeletteBreakfast;
    initOmeletteBreakfast(&omeletteBreakfast);
    prepare((Breakfast *)&omeletteBreakfast);

    printf("\nPreparing Pancake Breakfast:\n");
    PancakeBreakfast pancakeBreakfast;
    initPancakeBreakfast(&pancakeBreakfast);
    prepare((Breakfast *)&pancakeBreakfast);

    return 0;
}