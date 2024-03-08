class Rectangle:
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

class Circle:
    def __init__(self, radius: float):
        self.radius = radius

class AreaCalculator:
    def compute_area(self, shape) -> float:
        if isinstance(shape, Rectangle):
            return shape.width * shape.height
        elif isinstance(shape, Circle):
            return 3.1415 * shape.radius ** 2
        return 0
