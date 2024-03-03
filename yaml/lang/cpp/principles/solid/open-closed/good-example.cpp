#include <cmath> // Required for M_PI

class Shape {
public:
  virtual double computeArea() const = 0;
  virtual ~Shape() {}
};

class Rectangle : public Shape {
public:
  Rectangle(double width, double height) : width(width), height(height) {}

  double computeArea() const override { return width * height; }

private:
  double width;
  double height;
};

class Circle : public Shape {
public:
  Circle(double radius) : radius(radius) {}

  double computeArea() const override { return M_PI * radius * radius; }

private:
  double radius;
};
