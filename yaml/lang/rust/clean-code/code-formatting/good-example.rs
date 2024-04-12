fn calculate_distance(speed: f64, time: f64) -> f64 {
    // Check for invalid inputs
    if speed < 0.0 || time < 0.0 {
        return -1.0;
    }
    // Calculate and return the distance
    speed * time
}