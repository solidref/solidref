package main

import (
	"math"
)

// Define a Shape interface with a method area
type Shape interface {
	area() float64
}

// Rectangle struct adhering to the Shape interface
type Rectangle struct {
	width, height float64
}

// Rectangle's area method
func (r Rectangle) area() float64 {
	return r.width * r.height // Compute area for Rectangle
}

// Circle struct adhering to the Shape interface
type Circle struct {
	radius float64
}

// Circle's area method
func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius // Compute area for Circle
}

// AreaCalculator struct is now simplified
type AreaCalculator struct{}

// computeArea takes in a shape and utilizes the area method of the Shape interface
func (ac AreaCalculator) computeArea(shape Shape) float64 {
	return shape.area() // Dynamically computes area based on shape type
}

// Usage example within main function
func main() {
	// You can define shapes like this
	rect := Rectangle{width: 5, height: 10}
	circle := Circle{radius: 7}

	calculator := AreaCalculator{}

	// Now it's simple to compute area for both shapes
	// without modifying or adding new functionality directly inside AreaCalculator
	// This adheres to the open-closed principle
	rectArea := calculator.computeArea(rect)
	circleArea := calculator.computeArea(circle)

	// Outputs can be used or displayed as needed
	println("Rectangle Area:", rectArea)
	println("Circle Area:", circleArea)
}