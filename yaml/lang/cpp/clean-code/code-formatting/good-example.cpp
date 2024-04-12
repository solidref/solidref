#include <iostream>

// Function to calculate distance based on speed and time
int calculateDistance(int speed, int time) {
    // Validate speed and time are not negative
    if (speed < 0 || time < 0) {
        return -1; // Return -1 for invalid input
    }
    return speed * time; // Calculate and return distance
}

// Example usage
int main() {
    int speed = 10;
    int time = 5;
    int distance = calculateDistance(speed, time);
    if (distance != -1) {
        std::cout << "The distance is " << distance << std::endl;
    } else {
        std::cout << "Invalid input provided." << std::endl;
    }
    return 0;
}