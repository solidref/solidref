package main

import "fmt"

// D is a struct with no fields, serving as a placeholder for the method.
type D struct{}

// Subtract takes two numbers d1 and d2 and returns their difference.
// This is a more descriptive method name reflecting what the operation actually does.
func (D) Subtract(d1, d2 float64) float64 {
	return d1 - d2
}

func main() {
	d := D{}
	fmt.Println(d.Subtract(10, 5)) // expects 5
}