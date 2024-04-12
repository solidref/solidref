#include <iostream>

// Subtract subtrahend from minuend and return the result
int subtract(int minuend, int subtrahend) {
    return minuend - subtrahend;
}

int main() {
    std::cout << subtract(10, 5) << std::endl; // Should print 5
    return 0;
}