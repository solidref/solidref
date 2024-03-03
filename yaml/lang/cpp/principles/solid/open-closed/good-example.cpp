#include <cmath> // For M_PI and std::pow
#include <iostream>

// Abstract base class Shape
class Shape {
public:
  virtual double computeArea() const = 0; // Pure virtual function
  virtual ~Shape() {} // Virtual destructor for proper cleanup
};

// Derived class Rectangle from Shape
class Rectangle : public Shape {
private:
  double width;
  double height;

public:
  Rectangle(double width, double height)
      : width(width), height(height) {} // Constructor

  double computeArea() const override { // Override computeArea for Rectangle
    return width * height;
  }
};

// Derived class Circle from Shape
class Circle : public Shape {
private:
  double radius;

public:
  Circle(double radius) : radius(radius) {} // Constructor

  double computeArea() const override { // Override computeArea for Circle
    return M_PI * std::pow(radius, 2);
  }
};

// Example usage
int main() {
  Rectangle rectangle(10, 5); // Create a Rectangle object
  Circle circle(3);           // Create a Circle object

  std::cout << "Area of rectangle: " << rectangle.computeArea() << std::endl;
  std::cout << "Area of circle: " << circle.computeArea() << std::endl;

  return 0;
}
