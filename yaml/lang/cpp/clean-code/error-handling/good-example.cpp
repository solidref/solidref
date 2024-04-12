#include <iostream>
#include <string>
#include <stdexcept>

int parseUserInput(const std::string& input) {
    // Attempt to parse the input to a number
    size_t idx;
    int result = std::stoi(input, &idx);
    // Check if the parsing consumed the entire string to verify its validity
    if (idx != input.length()) {
        throw std::invalid_argument("Input cannot be parsed to a number.");
    }
    return result;
}

int main() {
    try {
        int result = parseUserInput("1024");
        std::cout << "Parsed input: " << result << std::endl;
    } catch (const std::exception& error) {
        // Handle parsing errors uniformly
        std::cerr << "Failed to parse input: " << error.what() << std::endl;
    }
    return 0;
}