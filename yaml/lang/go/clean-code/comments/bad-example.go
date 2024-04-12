package main

import "fmt"

// subtract subtracts subtrahend from minuend and returns the result.
func subtract(minuend, subtrahend int) int {
    return minuend - subtrahend
}

func main() {
    fmt.Println(subtract(10, 5)) // Usage example
}