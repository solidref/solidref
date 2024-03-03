#include <cmath> // For M_PI
#include <string>

class Shape {
public:
  virtual ~Shape() {}

  // Getter for type
  std::string getType() const { return _type; }

protected:
  std::string _type;
};

class Rectangle : public Shape {
public:
  Rectangle(double width, double height) : width(width), height(height) {
    this->_type = "Rectangle";
  }
  double width;
  double height;
};

class Circle : public Shape {
public:
  Circle(double radius) : radius(radius) { this->_type = "Circle"; }
  double radius;
};

class AreaCalculator {
public:
  double computeArea(Shape *shape) {
    if (shape->getType() == "Rectangle") {
      Rectangle *r = static_cast<Rectangle *>(shape);
      return r->width * r->height;
    } else if (shape->getType() == "Circle") {
      Circle *c = static_cast<Circle *>(shape);
      return M_PI * c->radius * c->radius; // Using M_PI for better precision
    }

    return 0; // Return 0 if shape is not recognized
  }
};
