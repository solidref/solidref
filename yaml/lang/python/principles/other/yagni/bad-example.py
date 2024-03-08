class Calculator:
  def add(self, a: float, b : float) -> float:
    return a + b

  # Do not define methods unless they are used

  def multiply(self, a : float, b : float) -> float:
    return a * b

  def divide(self, a : float, b : float) -> float:
    if (b == 0):
      raise Exception(self, "Division by zero is not allowed.")
    return a / b

  def subtract(self, a : float, b : float) -> float:
    return a - b
}
