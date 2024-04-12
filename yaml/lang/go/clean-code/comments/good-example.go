package main

import (
	"fmt"
	"time"
)

// Adjusts for the time zone difference in GMT
func adjustForTimezone(timestamp int64) int64 {
	const HOUR = 3600
	return timestamp + HOUR*5 // Adding 5 hours to the timestamp
}

func main() {
	// Example usage
	currentTimestamp := time.Now().Unix()
	adjustedTimestamp := adjustForTimezone(currentTimestamp)
	fmt.Println("Current Timestamp:", currentTimestamp)
	fmt.Println("Adjusted Timestamp:", adjustedTimestamp)
}