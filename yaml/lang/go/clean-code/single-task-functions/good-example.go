package main

import (
	"fmt"
	"strings"
)

// Splits input text into lines
func splitIntoLines(text string) []string {
	return strings.Split(text, "\n")
}

// Processes each line, imagine complex processing here
func processLines(lines []string) []string {
	processedLines := make([]string, len(lines))
	for i, line := range lines {
		// Imagine complex processing here
		processedLines[i] = strings.ToUpper(line)
	}
	return processedLines
}

// Prints each line
func printLines(lines []string) {
	for _, line := range lines {
		fmt.Println(line)
	}
}

// Orchestrates the processing of data
func processData(input string) {
	lines := splitIntoLines(input)
	processedLines := processLines(lines)
	printLines(processedLines)
}

func main() {
	input := "hello\ngo\nworld"
	processData(input)
}