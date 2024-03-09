package main

import "fmt"

// Bird interface that defines a fly method
type Bird interface {
  Fly()
}

// Duck struct implements Bird interface
type Duck struct{}

// Fly method for Duck
func (d Duck) Fly() {
  fmt.Println("Bird is flying")
}

// Quack method for Duck
func (d Duck) Quack() {
  fmt.Println("Duck is quacking")
}

// Goose struct implements Bird interface
type Goose struct{}

// Fly method for Goose
func (g Goose) Fly() {
  fmt.Println("Bird is flying")
}

// Swim method for Goose
func (g Goose) Swim() {
  fmt.Println("Goose is swimming")
}

// makeBirdFly takes a Bird interface and calls its Fly method
func makeBirdFly(bird Bird) {
  bird.Fly()
}

func main() {
  duck := Duck{}
  goose := Goose{}

  makeBirdFly(duck)    // Output: Bird is flying
  makeBirdFly(goose)   // Output: Bird is flying
}