#include <stdio.h>

// Subtract subtrahend from minuend and return the result
int subtract(int minuend, int subtrahend) {
    return minuend - subtrahend;
}

int main() {
    int result = subtract(10, 5);
    printf("The result is %d\n", result);
    return 0;
}