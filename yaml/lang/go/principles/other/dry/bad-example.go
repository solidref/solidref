package main

import "fmt"

// AddTax adds a 5% tax to the given price.
func AddTax(price float64) float64 {
    return price + (price * 0.05)
}

func main() {
    foodPrice := AddTax(100)
    electronicsPrice := AddTax(200)
    fmt.Println("Food price with tax:", foodPrice)
    fmt.Println("Electronics price with tax:", electronicsPrice)
}