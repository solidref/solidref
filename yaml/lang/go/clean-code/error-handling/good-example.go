package main

import (
	"fmt"
	"strconv"
)

// parseUserInput attempts to convert a string input into a number.
// It returns an error if the input cannot be parsed.
func parseUserInput(input string) (int, error) {
	result, err := strconv.Atoi(input)
	if err != nil {
		return 0, fmt.Errorf("input cannot be parsed to a number")
	}
	return result, nil
}

func main() {
	// Attempt to parse the user input and handle errors gracefully.
	result, err := parseUserInput("1024")
	if err != nil {
		fmt.Println("Failed to parse input:", err)
		return
	}
	fmt.Println("Parsed input:", result)
}