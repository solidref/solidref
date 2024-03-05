abstract class Shape {
  abstract double computeArea();
}

class Rectangle extends Shape {
  private double width;
  private double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }

  @Override
  double computeArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  double computeArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

public class Main {
  public static void main(String[] args) {
    Shape rectangle = new Rectangle(5, 10);
    Shape circle = new Circle(7);

    System.out.println("Area of the rectangle: " + rectangle.computeArea());
    System.out.println("Area of the circle: " + circle.computeArea());
  }
}

