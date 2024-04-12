#include <iostream>

class Calculator {
public:
  // Subtracts the subtrahend from the minuend and returns the result.
  int subtract(int minuend, int subtrahend) {
    return minuend - subtrahend;
  }
};

// Example usage
int main() {
  Calculator calc;
  std::cout << "The result is: " << calc.subtract(10, 5) << std::endl;
  return 0;
}