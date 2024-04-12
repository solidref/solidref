package main

import (
	"fmt"
)

// Calculator defines a structure for performing calculations
type Calculator struct{}

// Subtract subtracts subtrahend from minuend and returns the result
func (c Calculator) Subtract(minuend, subtrahend int) int {
	return minuend - subtrahend
}

func main() {
	calc := Calculator{}
	result := calc.Subtract(10, 5)
	fmt.Println(result)
}