#include <stdio.h>

// Function to calculate distance
// Returns -1 if either speed or time is negative
int calculateDistance(int speed, int time) {
    if (speed < 0 || time < 0) {
        return -1; // Return -1 for invalid inputs
    }
    return speed * time; // Calculate and return distance
}

// Example usage
int main() {
    int speed = 10;
    int time = 5;
    int distance = calculateDistance(speed, time);
    if (distance == -1) {
        printf("Invalid inputs.\n");
    } else {
        printf("The distance is %d.\n", distance);
    }
    return 0;
}