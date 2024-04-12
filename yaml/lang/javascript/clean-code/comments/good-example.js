function adjustForTimezone(timestamp) {
  // Adjusts for the time zone difference in GMT
  const HOUR = 3600;
  return timestamp + HOUR * 5;
}