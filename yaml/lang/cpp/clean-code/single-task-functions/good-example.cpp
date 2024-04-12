#include <iostream>
#include <vector>
#include <sstream>

std::vector<std::string> splitIntoLines(const std::string& text) {
    std::vector<std::string> lines;
    std::stringstream ss(text);
    std::string line;
    while (std::getline(ss, line)) {
        lines.push_back(line);
    }
    return lines;
}

std::vector<std::string> processLines(const std::vector<std::string>& lines) {
    std::vector<std::string> processedLines;
    // Imagine complex processing here
    for (const auto& line : lines) {
        processedLines.push_back(line + " (Processed)");
    }
    return processedLines;
}

void printLines(const std::vector<std::string>& lines) {
    for (const auto& line : lines) {
        std::cout << line << std::endl;
    }
}

void processData(const std::string& input) {
    auto lines = splitIntoLines(input);
    auto processedLines = processLines(lines);
    printLines(processedLines);
}

int main() {
    std::string input = "Line1\nLine2\nLine3";
    processData(input);
    return 0;
}