// Concrete Products: Car and Truck
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
}

// Creator: VehicleFactory
class VehicleFactory {
  // Factory Method
  createVehicle() {
    throw new Error("This method should be overridden.");
  }

  // An operation that uses the factory method
  deliverVehicle() {
    const vehicle = this.createVehicle();
    console.log("Delivering the vehicle...");
    vehicle.drive();
  }
}

// Concrete Creators: CarFactory and TruckFactory
class CarFactory extends VehicleFactory {
  // Factory Method implementation for creating a car
  createVehicle() {
    console.log("Creating a car...");
    return new Car();
  }
}

class TruckFactory extends VehicleFactory {
  // Factory Method implementation for creating a truck
  createVehicle() {
    console.log("Creating a truck...");
    return new Truck();
  }
}

// Client code
const carFactory = new CarFactory();
carFactory.deliverVehicle();

const truckFactory = new TruckFactory();
truckFactory.deliverVehicle();

/**
 * The Vehicle interface defines a common interface for all vehicles, which includes a drive() method.
 *
 * The Car and Truck classes are concrete implementations of the Vehicle interface.
 *
 * The VehicleFactory class is an abstract class representing a creator. It declares the createVehicle()
 * method, which serves as the Factory Method for creating vehicles. The deliverVehicle() method is a
 * common operation that uses the Factory Method to create and deliver a vehicle.
 *
 * The CarFactory and TruckFactory classes are concrete implementations of the VehicleFactory class.
 * They override the createVehicle() method to create specific types of vehicles (i.e., cars and trucks).
 *
 */
