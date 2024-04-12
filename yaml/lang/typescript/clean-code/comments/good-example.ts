// Adjusts for the time zone difference in GMT
function adjustForTimezone(timestamp: number): number {
  const HOUR = 3600;
  return timestamp + HOUR * 5;
}
