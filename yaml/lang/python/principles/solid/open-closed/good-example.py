from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def compute_area(self) -> float:
        pass

class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def compute_area(self) -> float:
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def compute_area(self) -> float:
        return math.pi * self.radius ** 2

# Usage
rectangle = Rectangle(10, 20)
print(f"Rectangle area: {rectangle.compute_area()}")

circle = Circle(5)
print(f"Circle area: {circle.compute_area()}")
