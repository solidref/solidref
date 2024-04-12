#include <iostream>
#include <string>
#include <cstdlib> // For std::strtol
#include <cerrno>  // For errno

// Parses user input, returns parsed number or an error indicator.
// Exceptions are caught and an error is returned in such case.
int parseUserInput(const std::string& input, bool& errorOccurred) {
    char* end;
    errno = 0; // To distinguish success/failure after call
    long int result = std::strtol(input.c_str(), &end, 10);

    // Check for (no digits at all, or does not end with '\0', or out of range of int)
    if (end == input.c_str() || *end != '\0' || errno == ERANGE || result > INT_MAX || result < INT_MIN) {
        errorOccurred = true; // Indicate that an error occurred
        return 0; // Return value is not relevant, errorOccurred flag indicates error
    } else {
        errorOccurred = false; // Parse successful, no error occurred
        return static_cast<int>(result); // Safe to cast due to checks for int range
    }
}

int main() {
    std::string input = "1024";
    bool errorOccurred;
    int result = parseUserInput(input, errorOccurred);

    if (errorOccurred) {
        std::cerr << "Failed to parse input." << std::endl;
    } else {
        std::cout << "Parsed input: " << result << std::endl;
    }

    return 0;
}