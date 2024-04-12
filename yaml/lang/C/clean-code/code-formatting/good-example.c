#include <stdio.h>

// Function to calculate distance
int calculateDistance(int speed, int time) {
  // Check if either speed or time is negative, return -1 if true
  if (speed < 0 || time < 0) {
    return -1;
  }
  // Calculate and return distance
  return speed * time;
}

int main() {
  int speed, time, distance;

  printf("Enter speed: ");
  scanf("%d", &speed);
  printf("Enter time: ");
  scanf("%d", &time);

  distance = calculateDistance(speed, time);

  if(distance >= 0) {
    printf("Distance: %d\n", distance);
  } else {
    printf("Invalid input. Speed and time must be non-negative.\n");
  }

  return 0;
}