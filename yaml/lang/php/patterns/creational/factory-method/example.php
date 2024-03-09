<?php

interface Vehicle {
  public function drive();
}

class Car implements Vehicle {
  public function drive() {
    echo "Driving a car...\n";
  }
}

class Truck implements Vehicle {
  public function drive() {
    echo "Driving a truck...\n";
  }
}

abstract class VehicleFactory {
  abstract public function createVehicle(): Vehicle;

  public function deliverVehicle() {
    $vehicle = $this->createVehicle();
    echo "Delivering the vehicle...\n";
    $vehicle->drive();
  }
}

class CarFactory extends VehicleFactory {
  public function createVehicle(): Vehicle {
    echo "Creating a car...\n";
    return new Car();
  }
}

class TruckFactory extends VehicleFactory {
  public function createVehicle(): Vehicle {
    echo "Creating a truck...\n";
    return new Truck();
  }
}

$carFactory = new CarFactory();
$carFactory->deliverVehicle();

$truckFactory = new TruckFactory();
$truckFactory->deliverVehicle();

/*
 * The Vehicle interface defines a common interface for all vehicles, which includes a drive() method.
 *
 * The Car and Truck classes are concrete implementations of the Vehicle interface.
 *
 * The VehicleFactory class is an abstract class representing a creator. It declares the createVehicle() method,
 * which serves as the Factory Method for creating vehicles. The deliverVehicle() method is a common operation
 * that uses the Factory Method to create and deliver a vehicle.
 *
 * The CarFactory and TruckFactory classes are concrete implementations of the VehicleFactory class.
 * They override the createVehicle() method to create specific types of vehicles (i.e., cars and trucks).
 *
 */

?>