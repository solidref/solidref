#include <stdbool.h>
#include <stdio.h>

// Function to check if a number is even
bool isEven(int num) {
    return num % 2 == 0;
}

int main() {
    int number = 4;
    if (isEven(number)) {
        printf("%d is even\n", number);
    } else {
        printf("%d is odd\n", number);
    }
    return 0;
}