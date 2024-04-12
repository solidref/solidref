using System;

// Product interface: Vehicle
public interface IVehicle {
  void Drive();
}

// Concrete Products: Car and Truck
public class Car : IVehicle {
  public void Drive() {
    Console.WriteLine("Driving a car...");
  }
}

public class Truck : IVehicle {
  public void Drive() {
    Console.WriteLine("Driving a truck...");
  }
}

// Creator: VehicleFactory
public abstract class VehicleFactory {
  // Factory Method
  public abstract IVehicle CreateVehicle();

  // An operation that uses the factory method
  public void DeliverVehicle() {
    var vehicle = CreateVehicle();
    Console.WriteLine("Delivering the vehicle...");
    vehicle.Drive();
  }
}

// Concrete Creators: CarFactory and TruckFactory
public class CarFactory : VehicleFactory {
  // Factory Method implementation for creating a car
  public override IVehicle CreateVehicle() {
    Console.WriteLine("Creating a car...");
    return new Car();
  }
}

public class TruckFactory : VehicleFactory {
  // Factory Method implementation for creating a truck
  public override IVehicle CreateVehicle() {
    Console.WriteLine("Creating a truck...");
    return new Truck();
  }
}

// Client code
class Program {
  static void Main(string[] args) {
    var carFactory = new CarFactory();
    carFactory.DeliverVehicle();

    var truckFactory = new TruckFactory();
    truckFactory.DeliverVehicle();
  }
}

/*
The Vehicle interface defines a common interface for all vehicles, which includes a Drive() method.

The Car and Truck classes are concrete implementations of the Vehicle interface.

The VehicleFactory class is an abstract class representing a creator. It declares the CreateVehicle()
method, which serves as the Factory Method for creating vehicles. The DeliverVehicle() method is a
common operation that uses the Factory Method to create and deliver a vehicle.

The CarFactory and TruckFactory classes are concrete implementations of the VehicleFactory class.
They override the CreateVehicle() method to create specific types of vehicles (i.e., cars and trucks).
*/