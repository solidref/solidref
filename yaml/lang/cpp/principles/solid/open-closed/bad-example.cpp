#include <cmath> // For M_PI
#include <iostream>

// Rectangle class with width and height
class Rectangle {
public:
  double width;
  double height;
};

// Circle class with radius
class Circle {
public:
  double radius;
};

// AreaCalculator class with a method to compute the area of shapes
class AreaCalculator {
public:
  double computeArea(void *shape, char shapeType) {
    if (shapeType == 'R') { // Rectangle
      auto *rectangle = static_cast<Rectangle *>(shape);
      return rectangle->width * rectangle->height;
    } else if (shapeType == 'C') { // Circle
      auto *circle = static_cast<Circle *>(shape);
      return M_PI * circle->radius * circle->radius;
    }

    return 0; // Return 0 if shape is unknown
  }
};

// Example usage
int main() {
  Rectangle rectangle = {10, 5};
  Circle circle = {3};

  AreaCalculator calculator;

  std::cout << "Area of rectangle: " << calculator.computeArea(&rectangle, 'R')
            << std::endl;
  std::cout << "Area of circle: " << calculator.computeArea(&circle, 'C')
            << std::endl;

  return 0;
}
