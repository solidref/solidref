fn adjust_for_timezone(timestamp: i64) -> i64 {
    // Adjusts for the time zone difference in GMT
    const HOUR: i64 = 3600;
    timestamp + HOUR * 5
}