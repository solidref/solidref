#include <stdio.h>

// Calculator structure
typedef struct {
    // Empty structure, as we are using function not related to the state
} Calculator;

// subtract function taking two integers and returning their difference
int subtract(int minuend, int subtrahend) {
    return minuend - subtrahend;
}

int main() {
    Calculator calc; // Calculator instance (unused in this example)
    int difference = subtract(10, 5); // Calling the subtract function
    printf("The difference is: %d\n", difference); // Printing the result
    return 0;
}