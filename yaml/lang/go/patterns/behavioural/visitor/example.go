package main

import "fmt"

// AnimalVisitor interface
type AnimalVisitor interface {
	VisitLion(lion *Lion)
	VisitElephant(elephant *Elephant)
	VisitGiraffe(giraffe *Giraffe)
}

// AnimalFeeder is a concrete visitor implementing the operations on animals
type AnimalFeeder struct{}

func (af *AnimalFeeder) VisitLion(lion *Lion) {
	fmt.Printf("Feeding meat to %s.\n", lion.GetName())
}

func (af *AnimalFeeder) VisitElephant(elephant *Elephant) {
	fmt.Printf("Feeding hay to %s.\n", elephant.GetName())
}

func (af *AnimalFeeder) VisitGiraffe(giraffe *Giraffe) {
	fmt.Printf("Feeding leaves to %s.\n", giraffe.GetName())
}

// Animal interface representing animals
type Animal interface {
	Accept(visitor AnimalVisitor)
}

// Lion is a concrete element representing a lion
type Lion struct {
	name string
}

func NewLion(name string) *Lion {
	return &Lion{name: name}
}

func (l *Lion) GetName() string {
	return l.name
}

func (l *Lion) Accept(visitor AnimalVisitor) {
	visitor.VisitLion(l)
}

// Elephant is a concrete element representing an elephant
type Elephant struct {
	name string
}

func NewElephant(name string) *Elephant {
	return &Elephant{name: name}
}

func (e *Elephant) GetName() string {
	return e.name
}

func (e *Elephant) Accept(visitor AnimalVisitor) {
	visitor.VisitElephant(e)
}

// Giraffe is a concrete element representing a giraffe
type Giraffe struct {
	name string
}

func NewGiraffe(name string) *Giraffe {
	return &Giraffe{name: name}
}

func (g *Giraffe) GetName() string {
	return g.name
}

func (g *Giraffe) Accept(visitor AnimalVisitor) {
	visitor.VisitGiraffe(g)
}

// Zoo represents the object structure containing a collection of animals
type Zoo struct {
	animals []Animal
}

func (z *Zoo) AddAnimal(animal Animal) {
	z.animals = append(z.animals, animal)
}

// PerformOperation performs the operation defined by the visitor on each animal
func (z *Zoo) PerformOperation(visitor AnimalVisitor) {
	for _, animal := range z.animals {
		animal.Accept(visitor)
	}
}

// Client code
func main() {
	zoo := &Zoo{}
	zoo.AddAnimal(NewLion("Simba"))
	zoo.AddAnimal(NewElephant("Dumbo"))
	zoo.AddAnimal(NewGiraffe("Melman"))

	feeder := &AnimalFeeder{}
	zoo.PerformOperation(feeder)
}