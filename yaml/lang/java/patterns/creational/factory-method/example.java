// Vehicle.java
interface Vehicle {
  void drive();
}

// Car.java
class Car implements Vehicle {
  @Override
  public void drive() {
    System.out.println("Driving a car...");
  }
}

// Truck.java
class Truck implements Vehicle {
  @Override
  public void drive() {
    System.out.println("Driving a truck...");
  }
}

// VehicleFactory.java
abstract class VehicleFactory {
  abstract Vehicle createVehicle();

  public void deliverVehicle() {
    Vehicle vehicle = createVehicle();
    System.out.println("Delivering the vehicle...");
    vehicle.drive();
  }
}

// CarFactory.java
class CarFactory extends VehicleFactory {
  @Override
  Vehicle createVehicle() {
    System.out.println("Creating a car...");
    return new Car();
  }
}

// TruckFactory.java
class TruckFactory extends VehicleFactory {
  @Override
  Vehicle createVehicle() {
    System.out.println("Creating a truck...");
    return new Truck();
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    VehicleFactory carFactory = new CarFactory();
    carFactory.deliverVehicle();

    VehicleFactory truckFactory = new TruckFactory();
    truckFactory.deliverVehicle();
  }
}

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
