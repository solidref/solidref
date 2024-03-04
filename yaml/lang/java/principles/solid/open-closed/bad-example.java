class Rectangle {
  double width;
  double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  double radius;

  public Circle(double radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  public double computeArea(Object shape) {
    if (shape instanceof Rectangle) {
      Rectangle rectangle = (Rectangle) shape;
      return rectangle.width * rectangle.height;
    } else if (shape instanceof Circle) {
      Circle circle = (Circle) shape;
      return Math.PI * circle.radius * circle.radius;
    }

    throw new IllegalArgumentException("Unknown shape");
  }
}
