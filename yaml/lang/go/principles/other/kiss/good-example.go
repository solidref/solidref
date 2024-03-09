package main

import (
    "fmt"
)

// Check if a number is even
func isEven(num int) bool {
    return num%2 == 0
}

func main() {
    fmt.Println(isEven(4)) // Should print true
    fmt.Println(isEven(5)) // Should print false
}