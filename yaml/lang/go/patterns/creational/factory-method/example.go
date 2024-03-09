package main

import "fmt"

// Vehicle interface that all vehicles will implement
type Vehicle interface {
	Drive()
}

// Car type that implements the Vehicle interface
type Car struct{}

func (c *Car) Drive() {
	fmt.Println("Driving a car...")
}

// Truck type that implements the Vehicle interface
type Truck struct{}

func (truck *Truck) Drive() {
	fmt.Println("Driving a truck...")
}

// VehicleFactory interface defines the method that all concrete factories must implement
type VehicleFactory interface {
	CreateVehicle() Vehicle
}

// CarFactory type that implements the VehicleFactory interface
type CarFactory struct{}

func (cf *CarFactory) CreateVehicle() Vehicle {
	fmt.Println("Creating a car...")
	return new(Car)
}

// TruckFactory type that implements the VehicleFactory interface
type TruckFactory struct{}

func (tf *TruckFactory) CreateVehicle() Vehicle {
	fmt.Println("Creating a truck...")
	return new(Truck)
}

// DeliverVehicle takes a VehicleFactory, creates a Vehicle, and delivers it
func DeliverVehicle(factory VehicleFactory) {
	fmt.Println("Delivering the vehicle...")
	vehicle := factory.CreateVehicle()
	vehicle.Drive()
}

// Main function demonstrating the Factory Method pattern
func main() {
	carFactory := &CarFactory{}
	DeliverVehicle(carFactory)

	truckFactory := &TruckFactory{}
	DeliverVehicle(truckFactory)
}

/*
The Vehicle interface defines a common interface for all vehicles, which includes a Drive() method.

The Car and Truck structs are concrete implementations of the Vehicle interface.

The VehicleFactory interface represents a creator, declaring the CreateVehicle() method, which serves as the Factory Method for creating vehicles.

The CarFactory and TruckFactory structs are concrete implementations of the VehicleFactory interface. They implement the CreateVehicle() method to create specific types of vehicles (i.e., cars and trucks).

The DeliverVehicle function represents an operation that uses the Factory Method to create and deliver a vehicle. It demonstrates the use of the Factory Method pattern in a Go idiomatic way.
*/