package main

import "fmt"

// Workshop interface representing the Implementor.
type Workshop interface {
	work()
}

// PaintWorkshop is a Concrete Implementor.
type PaintWorkshop struct{}

func (p *PaintWorkshop) work() {
	fmt.Println("Painting vehicle")
}

// RepairWorkshop is another Concrete Implementor.
type RepairWorkshop struct{}

func (r *RepairWorkshop) work() {
	fmt.Println("Repairing vehicle")
}

// Vehicle acts as the Abstraction.
type Vehicle struct {
	workshop Workshop // Composition over Workshop interface.
}

func (v *Vehicle) manufacture() {} // Defined to fulfill Vehicle's role as an interface.

// Car is a Refined Abstraction of Vehicle.
type Car struct {
	Vehicle
}

func NewCar(workshop Workshop) *Car {
	return &Car{Vehicle{workshop: workshop}}
}

func (c *Car) manufacture() {
	fmt.Println("Manufacturing car.")
	c.workshop.work()
}

// Truck is another Refined Abstraction of Vehicle.
type Truck struct {
	Vehicle
}

func NewTruck(workshop Workshop) *Truck {
	return &Truck{Vehicle{workshop: workshop}}
}

func (t *Truck) manufacture() {
	fmt.Println("Manufacturing truck.")
	t.workshop.work()
}

// Main function demonstrating client code
func main() {
	car := NewCar(&PaintWorkshop{})
	car.manufacture() // Output: Manufacturing car. Painting vehicle

	truck := NewTruck(&RepairWorkshop{})
	truck.manufacture() // Output: Manufacturing truck. Repairing vehicle

	/*
	  The Vehicle struct represents the abstraction, extended by Car and Truck through composition.

	  The Workshop interface acts as the implementor, which is concretely implemented by PaintWorkshop and RepairWorkshop.

	  Each vehicle type (Car, Truck) can be associated with a specific workshop (PaintWorkshop, RepairWorkshop) using composition, delegating the work to the workshop.
	*/
}