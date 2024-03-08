from abc import ABC, abstractmethod

# Product interface: Vehicle
class Vehicle(ABC):
    @abstractmethod
    def drive(self):
        pass

# Concrete Products: Car and Truck
class Car(Vehicle):
    def drive(self):
        print("Driving a car...")

class Truck(Vehicle):
    def drive(self):
        print("Driving a truck...")

# Creator: VehicleFactory
class VehicleFactory(ABC):
    @abstractmethod
    def create_vehicle(self):
        pass
    
    # An operation that uses the factory method
    def deliver_vehicle(self):
        vehicle = self.create_vehicle()
        print("Delivering the vehicle...")
        vehicle.drive()

# Concrete Creators: CarFactory and TruckFactory
class CarFactory(VehicleFactory):
    # Factory Method implementation for creating a car
    def create_vehicle(self):
        print("Creating a car...")
        return Car()

class TruckFactory(VehicleFactory):
    # Factory Method implementation for creating a truck
    def create_vehicle(self):
        print("Creating a truck...")
        return Truck()

# Client code
car_factory = CarFactory()
car_factory.deliver_vehicle()

truck_factory = TruckFactory()
truck_factory.deliver_vehicle()

"""
The Vehicle interface defines a common interface for all vehicles, which includes a drive() method.

The Car and Truck classes are concrete implementations of the Vehicle interface.

The VehicleFactory class is an abstract class representing a creator. It declares the create_vehicle()
method, which serves as the Factory Method for creating vehicles. The deliver_vehicle() method is a
common operation that uses the Factory Method to create and deliver a vehicle.

The CarFactory and TruckFactory classes are concrete implementations of the VehicleFactory class.
They override the create_vehicle() method to create specific types of vehicles (i.e., cars and trucks).
"""