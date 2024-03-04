#include <iostream>
#include <memory>

class Vehicle {
public:
  virtual void drive() const = 0;
  virtual ~Vehicle() {}
};

class Car : public Vehicle {
public:
  void drive() const override { std::cout << "Driving a car..." << std::endl; }
};

class Truck : public Vehicle {
public:
  void drive() const override {
    std::cout << "Driving a truck..." << std::endl;
  }
};

// Creator: VehicleFactory

class VehicleFactory {
public:
  virtual std::unique_ptr<Vehicle> createVehicle() const = 0;

  void deliverVehicle() const {
    auto vehicle = createVehicle();
    std::cout << "Delivering the vehicle..." << std::endl;
    vehicle->drive();
  }

  virtual ~VehicleFactory() {}
};

// Concrete Creators: CarFactory and TruckFactory

class CarFactory : public VehicleFactory {
public:
  std::unique_ptr<Vehicle> createVehicle() const override {
    std::cout << "Creating a car..." << std::endl;
    return std::make_unique<Car>();
  }
};

class TruckFactory : public VehicleFactory {
public:
  std::unique_ptr<Vehicle> createVehicle() const override {
    std::cout << "Creating a truck..." << std::endl;
    return std::make_unique<Truck>();
  }
};

// Client Code

int main() {
  CarFactory carFactory;
  carFactory.deliverVehicle();

  TruckFactory truckFactory;
  truckFactory.deliverVehicle();

  return 0;
}

/**
 * The Vehicle interface defines a common interface for all vehicles, which
 * includes a drive() method.
 *
 * The Car and Truck classes are concrete implementations of the Vehicle
 * interface.
 *
 * The VehicleFactory class is an abstract class representing a creator. It
 * declares the createVehicle() method, which serves as the Factory Method for
 * creating vehicles. The deliverVehicle() method is a common operation that
 * uses the Factory Method to create and deliver a vehicle.
 *
 * The CarFactory and TruckFactory classes are concrete implementations of the
 * VehicleFactory class. They override the createVehicle() method to create
 * specific types of vehicles (i.e., cars and trucks).
 *
 */
