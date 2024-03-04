#include <iostream>

// Function to check if a number is even
bool isEven(int num) { return num % 2 == 0; }

// Example usage
int main() {
  int num = 4;

  std::cout << "isEven(" << num << "): " << (isEven(num) ? "true" : "false")
            << std::endl;

  return 0;
}
