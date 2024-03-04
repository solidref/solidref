class Calculator {
  float add(float a, float b) {
    return a + b;
  }

  // Do not define methods unless they are used

  float multiply(float a, float b) {
    return a * b;
  }

  float divide(float a, float b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  float subtract(float a, float b) {
    return a - b;
  }
}
