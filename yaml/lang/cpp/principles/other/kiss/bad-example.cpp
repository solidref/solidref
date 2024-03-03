// there is no need for absolute value here
#include <cmath> // For std::abs
#include <iostream>

// Function to check if a number is even, using std::abs
bool isEven(int num) { return num % std::abs(2) == 0; }
