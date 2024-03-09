package main

import (
	"fmt"
)

type Bird interface {
	Fly() error
}

// Implement Fly method for each specific type of Bird
type GenericBird struct{}

func (gb GenericBird) Fly() error {
	// Implement generic bird flying behavior
	fmt.Println("This bird is flying.")
	return nil
}

type Ostrich struct{}

func (o Ostrich) Fly() error {
	// Ostrich, being a Bird, overrides Fly but it doesn't actually fly, indicating a violation of Liskov Substitution Principle.
	return fmt.Errorf("can't fly")
}

// A better approach adheres to Liskov Substitution Principle by avoiding unexpected behavior from the Fly method.
// We refactor our design to accommodate birds that can't fly without breaking the principle.

type NonFlyingBird struct{}

func (nfb NonFlyingBird) Run() {
	// Specific behavior for non-flying birds
	fmt.Println("This bird runs instead of flies.")
}

func main() {
	// Example usage
	var bird Bird = GenericBird{}
	bird.Fly()

	var ostrich Bird = Ostrich{}
	err := ostrich.Fly()
	if err != nil {
		fmt.Println(err)
	}

	// Using the refined structure
	var nonFlyingBird NonFlyingBird = NonFlyingBird{}
	nonFlyingBird.Run()
}