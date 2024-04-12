function calculateDistance(speed: number, time: number): number {
  if (speed < 0 || time < 0) {
    return -1;
  }
  return speed * time;
}
