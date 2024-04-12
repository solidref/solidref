function calculateDistance(speed, time) {
  // Check if speed or time is negative
  if (speed < 0 || time < 0) {
    // Return -1 if either is negative
    return -1;
  }
  // Calculate and return distance
  return speed * time;
}