from abc import ABC, abstractmethod

# Abstraction: Vehicle
class Vehicle(ABC):
    def __init__(self, workshop):
        self.workshop = workshop

    @abstractmethod
    def manufacture(self):
        pass

# Implementor: Workshop
class Workshop(ABC):
    @abstractmethod
    def work(self):
        pass

# Concrete Implementor: Paint Workshop
class PaintWorkshop(Workshop):
    def work(self):
        print('Painting vehicle')

# Concrete Implementor: Repair Workshop
class RepairWorkshop(Workshop):
    def work(self):
        print('Repairing vehicle')

# Refined Abstraction: Car
class Car(Vehicle):
    def manufacture(self):
        print('Manufacturing car.')
        self.workshop.work()

# Refined Abstraction: Truck
class Truck(Vehicle):
    def manufacture(self):
        print('Manufacturing truck.')
        self.workshop.work()

# Client code
car = Car(PaintWorkshop())
car.manufacture()  # Output: Manufacturing car. Painting vehicle

truck = Truck(RepairWorkshop())
truck.manufacture()  # Output: Manufacturing truck. Repairing vehicle

"""
The Vehicle class represents the abstraction, which is extended by Car and Truck.

The Workshop interface represents the implementor, defining the work method.

PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.

Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
"""