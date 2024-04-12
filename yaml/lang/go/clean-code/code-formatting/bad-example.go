package main

import "fmt"

// calculateDistance calculates the distance given the speed and time.
// If either speed or time is negative, it returns -1 as an error value.
func calculateDistance(speed, time float64) float64 {
    if speed < 0 || time < 0 {
        return -1
    }
    return speed * time
}

func main() {
    fmt.Println(calculateDistance(10, 5)) // Expected output: 50
    fmt.Println(calculateDistance(-1, 5)) // Expected output: -1
}