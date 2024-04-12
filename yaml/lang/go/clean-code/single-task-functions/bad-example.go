package main

import (
	"fmt"
	"strings"
)

func processData(input string) {
	lines := strings.Split(input, "\n")
	var result []string
	for _, line := range lines {
		// Imagine complex processing here
		result = append(result, strings.ToUpper(line))
	}
	fmt.Println(result)
}

func main() {
	input := "example input\nanother line"
	processData(input)
}