class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  // Do not define methods unless they are used

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
