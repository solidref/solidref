package main

import (
	"fmt"
)

// calculateDistance calculates the distance based on speed and time.
// Returns -1 if either speed or time is negative.
func calculateDistance(speed, time float64) float64 {
	if speed < 0 || time < 0 {
		return -1
	}
	return speed * time
}

func main() {
	distance := calculateDistance(10, 5)
	fmt.Println(distance) // Expect 50
}