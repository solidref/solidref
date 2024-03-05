class Calculator {
  add(a, b) {
    return a + b;
  }

  // Do not define methods unless they are used

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  subtract(a, b) {
    return a - b;
  }
}
