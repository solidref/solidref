function calculateDistance(speed, time) {
  // Check if either speed or time is negative
  if (speed < 0 || time < 0) {
    return -1; // Return -1 to indicate an error
  }
  // Calculate and return the distance
  return speed * time;
}