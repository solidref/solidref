package main

import (
    "fmt"
    "math"
)

// Shape - a base type that others will conform to.
// Using an interface to demonstrate Open-Closed Principle.
type Shape interface {
    ComputeArea() float64
}

// Rectangle - a concrete Shape.
type Rectangle struct {
    Width, Height float64
}

// ComputeArea calculates area of the Rectangle, a method making Rectangle conform to Shape.
func (r Rectangle) ComputeArea() float64 {
    return r.Width * r.Height
}

// Circle - another concrete Shape.
type Circle struct {
    Radius float64
}

// ComputeArea calculates area of the Circle, a method making Circle conform to Shape.
func (c Circle) ComputeArea() float64 {
    return math.Pi * c.Radius * c.Radius
}

// main function to demonstrate use
func main() {
    var shapes []Shape = []Shape{
        Rectangle{Width: 10, Height: 5},
        Circle{Radius: 7},
    }

    for _, shape := range shapes {
        fmt.Println(shape.ComputeArea())
    }
}