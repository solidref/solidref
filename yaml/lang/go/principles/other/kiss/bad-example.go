package main

import (
	"fmt"
)

// there is no need for absolute value here
func isEven(num int) bool {
	return num%2 == 0
}

func main() {
	fmt.Println(isEven(4)) // Should print true
	fmt.Println(isEven(3)) // Should print false
}