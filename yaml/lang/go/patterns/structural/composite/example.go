package main

import "fmt"

// Department interface outlines methods for both simple and composite departments
type Department interface {
	GetName() string
	GetEmployees() []string
}

// IndividualDepartment represents a basic, single department with a name and employees.
type IndividualDepartment struct {
	name      string
	employees []string
}

func NewIndividualDepartment(name string, employees []string) *IndividualDepartment {
	return &IndividualDepartment{name: name, employees: employees}
}

func (d *IndividualDepartment) GetName() string {
	return d.name
}

func (d *IndividualDepartment) GetEmployees() []string {
	return d.employees
}

// CompositeDepartment can hold both IndividualDepartments and other CompositeDepartments.
type CompositeDepartment struct {
	name         string
	departments  []Department
}

func NewCompositeDepartment(name string) *CompositeDepartment {
	return &CompositeDepartment{name: name, departments: []Department{}}
}

func (cd *CompositeDepartment) GetName() string {
	return cd.name
}

func (cd *CompositeDepartment) AddDepartment(department Department) {
	cd.departments = append(cd.departments, department)
}

func (cd *CompositeDepartment) RemoveDepartment(department Department) {
	for i, d := range cd.departments {
		if d == department {
			cd.departments = append(cd.departments[:i], cd.departments[i+1:]...)
			break
		}
	}
}

func (cd *CompositeDepartment) GetEmployees() []string {
	var employees []string
	for _, department := range cd.departments {
		employees = append(employees, department.GetEmployees()...)
	}
	return employees
}

func main() {
	salesDepartment := NewIndividualDepartment("Sales Department", []string{"John", "Alice", "Bob"})
	marketingDepartment := NewIndividualDepartment("Marketing Department", []string{"Emily", "David"})
	engineeringDepartment := NewIndividualDepartment("Engineering Department", []string{"Michael", "Sarah", "Chris"})

	headDepartment := NewCompositeDepartment("Head Department")
	headDepartment.AddDepartment(salesDepartment)
	headDepartment.AddDepartment(marketingDepartment)

	parentEngineeringDepartment := NewCompositeDepartment("Parent Engineering Department")
	parentEngineeringDepartment.AddDepartment(engineeringDepartment)

	rootDepartment := NewCompositeDepartment("Root Department")
	rootDepartment.AddDepartment(headDepartment)
	rootDepartment.AddDepartment(parentEngineeringDepartment)

	// Display all employees in the root department
	fmt.Println("Employees in the root department:")
	fmt.Println(rootDepartment.GetEmployees())
}