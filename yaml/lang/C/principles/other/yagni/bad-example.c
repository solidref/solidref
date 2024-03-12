#include <stdio.h>
#include <stdlib.h>

// Function declarations
int add(int a, int b);
void errorDivisionByZero();

int main() {
    // Example usage
    int sum = add(3, 4);
    printf("Sum: %d\n", sum);
    return 0;
}

// Add function (used in this example)
int add(int a, int b) {
    return a + b;
}

// Error handling for division by zero
void errorDivisionByZero() {
    printf("Division by zero is not allowed.\n");
    exit(1);
}

// Do not define functions unless they are used

// Removed multiply, divide, and subtract functions to adhere to YAGNI principle.