#include <iostream>

// Function to calculate distance
int calculateDistance(int speed, int time) {
    // Check if speed or time is negative
    if (speed < 0 || time < 0) {
        return -1;
    }
    // Return the product of speed and time
    return speed * time;
}

int main() {
    // Example usage
    int speed = 10; // example speed
    int time = 5; // example time
    int distance = calculateDistance(speed, time);

    std::cout << "Distance: " << distance << std::endl;
    return 0;
}