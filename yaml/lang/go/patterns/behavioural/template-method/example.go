package main

import "fmt"

// Breakfast interface defines the template method and the steps required.
type Breakfast interface {
	Prepare()
	addIngredients()
	cook()
	boilWater()
	serve()
}

// BaseBreakfast provides default implementations of some steps.
type BaseBreakfast struct{}

func (b *BaseBreakfast) boilWater() {
	fmt.Println("Boiling water...")
}

func (b *BaseBreakfast) serve() {
	fmt.Println("Breakfast is served!")
}

// OmeletteBreakfast represents a breakfast of type omelette.
type OmeletteBreakfast struct {
	BaseBreakfast
}

func (o *OmeletteBreakfast) addIngredients() {
	fmt.Println("Adding eggs, cheese, and vegetables to the pan.")
}

func (o *OmeletteBreakfast) cook() {
	fmt.Println("Cooking the omelette until golden brown.")
}

func (o *OmeletteBreakfast) Prepare() {
	o.boilWater()
	o.addIngredients()
	o.cook()
	o.serve()
}

// PancakeBreakfast represents a breakfast of type pancake.
type PancakeBreakfast struct {
	BaseBreakfast
}

func (p *PancakeBreakfast) addIngredients() {
	fmt.Println("Mixing flour, eggs, milk, and sugar to make the batter.")
}

func (p *PancakeBreakfast) cook() {
	fmt.Println("Pouring the batter onto the griddle and flipping until cooked.")
}

func (p *PancakeBreakfast) Prepare() {
	p.boilWater()
	p.addIngredients()
	p.cook()
	p.serve()
}

// Client code to demonstrate the Template Method pattern in Go.
func main() {
	fmt.Println("Preparing Omelette Breakfast:")
	omelette := OmeletteBreakfast{}
	omelette.Prepare()

	fmt.Println("\nPreparing Pancake Breakfast:")
	pancake := PancakeBreakfast{}
	pancake.Prepare()
}

/*
In this Go example, we've adopted the template method design pattern to define
a sequence of steps for preparing breakfast. The interface Breakfast and the struct BaseBreakfast
abstract the common steps and provide default implementations respectively. Each specific breakfast,
such as OmeletteBreakfast and PancakeBreakfast, embeds BaseBreakfast and implements the necessary steps.

This design encapsulates the algorithm for preparing breakfast, ensuring that the high-level
sequence of steps is preserved while allowing subclasses to provide the specific details
of certain steps.
*/