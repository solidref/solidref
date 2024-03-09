package main

import "fmt"

type Employee struct {
	name     string
	position string
	salary   int
}

// Constructor for Employee
func NewEmployee(name string, position string, salary int) *Employee {
	return &Employee{name: name, position: position, salary: salary}
}

// Method responsible for printing employee information
func (e *Employee) Print() {
	fmt.Printf("Name: %s\n", e.name)
	fmt.Printf("Position: %s\n", e.position)
	fmt.Printf("Salary: %d\n", e.salary)
}

func main() {
	employee := NewEmployee("John Doe", "Software Engineer", 50000)
	employee.Print()
}