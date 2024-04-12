fn calculate_distance(speed: i32, time: i32) -> i32 {
    // Check for any negative inputs, return -1 if found
    if speed < 0 || time < 0 {
        -1
    } else {
        // Return the product of speed and time if inputs are valid
        speed * time
    }
}