package main

import (
	"fmt"
	"errors"
)

type Calculator struct{}

func (c Calculator) Add(a, b int) int {
	return a + b
}

// Do not define methods unless they are used

func main() {
	calc := Calculator{}
	fmt.Println(calc.Add(1, 2))
}