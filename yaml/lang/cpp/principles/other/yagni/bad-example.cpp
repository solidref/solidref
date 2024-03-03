#include <exception>
#include <iostream>
#include <stdexcept>

class Calculator {
public:
  double add(double a, double b) { return a + b; }

  // Do not define methods unless they are used

  double multiply(double a, double b) { return a * b; }

  double divide(double a, double b) {
    if (b == 0) {
      throw new std::runtime_error("Division by zero is not allowed.");
    }
    return a / b;
  }

  double subtract(double a, double b) { return a - b; }
}
