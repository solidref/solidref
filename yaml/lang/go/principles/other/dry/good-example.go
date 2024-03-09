package main

import (
	"fmt"
)

// addTax adds tax to a price. If no rate is provided, a default of 5% is used.
func addTax(price float64, rate ...float64) float64 {
	defaultRate := 0.05
	if len(rate) > 0 {
		return price + (price * rate[0])
	}
	return price + (price * defaultRate)
}

func main() {
	fmt.Println(addTax(100))       // Using default tax rate
	fmt.Println(addTax(100, 0.10)) // Using custom tax rate
}