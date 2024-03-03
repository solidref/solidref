#include <cmath> // For M_PI

class Shape {
public:
  virtual ~Shape() {}
};

class Rectangle : public Shape {
public:
  Rectangle(double width, double height) : width(width), height(height) {}
  double width;
  double height;
};

// Assuming definition for Circle as it's referenced
class Circle : public Shape {
public:
  Circle(double radius) : radius(radius) {}
  double radius;
};

class AreaCalculator {
public:
  double computeArea(Shape *shape) {
    // This approach requires modification of AreaCalculator to support new
    // shapes, violating OCP
    Rectangle *rectangle = dynamic_cast<Rectangle *>(shape);
    if (rectangle != nullptr) {
      return rectangle->width * rectangle->height;
    }

    Circle *circle = dynamic_cast<Circle *>(shape);
    if (circle != nullptr) {
      return M_PI * circle->radius * circle->radius;
    }

    return 0; // Return 0 if shape is not recognized
  }
};
