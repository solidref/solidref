package main

import (
	"fmt"
)

// Employee struct responsible only for storing employee data
type Employee struct {
	name     string
	position string
	salary   int
}

// NewEmployee is a constructor for creating a new Employee
func NewEmployee(name, position string, salary int) *Employee {
	return &Employee{name: name, position: position, salary: salary}
}

func (e *Employee) GetName() string {
	return e.name
}

func (e *Employee) GetPosition() string {
	return e.position
}

func (e *Employee) GetSalary() int {
	return e.salary
}

// EmployeePrinter struct responsible only for printing employee information
type EmployeePrinter struct{}

func (p *EmployeePrinter) Print(employee *Employee) {
	fmt.Printf("Name: %s\n", employee.GetName())
	fmt.Printf("Position: %s\n", employee.GetPosition())
	fmt.Printf("Salary: %d\n", employee.GetSalary())
}

func main() {
	// Usage
	employee := NewEmployee("John Doe", "Software Engineer", 50000)
	printer := EmployeePrinter{}
	printer.Print(employee)
}