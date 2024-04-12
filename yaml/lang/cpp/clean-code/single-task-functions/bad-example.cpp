#include <iostream>
#include <sstream>
#include <vector>
#include <algorithm>
using namespace std;

void processData(const string& input) {
    stringstream ss(input);
    string line;
    vector<string> result;

    // Read each line from the input
    while (getline(ss, line)) {
        // Imagine complex processing here
        transform(line.begin(), line.end(), line.begin(), ::toupper);
        result.push_back(line);
    }

    // Print the processed result
    for (const auto& processedLine : result) {
        cout << processedLine << endl;
    }
}