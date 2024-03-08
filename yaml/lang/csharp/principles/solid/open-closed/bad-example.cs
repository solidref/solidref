using System;

public class Rectangle {
  public double Width { get; set; }
  public double Height { get; set; }
}

public class Circle {
  public double Radius { get; set; }
}

// Introduces an interface to abstract the shape behavior
public interface IShape {
  double ComputeArea();
}

// Refactoring Rectangle to implement IShape
public class RectangleShape : Rectangle, IShape {
  public double ComputeArea() {
    return Width * Height;
  }
}

// Refactoring Circle to implement IShape
public class CircleShape : Circle, IShape {
  public double ComputeArea() {
    return Math.PI * Radius * Radius;
  }
}

// Refactored AreaCalculator to utilize polymorphism
public class AreaCalculator {
  public double ComputeArea(IShape shape) {
    return shape.ComputeArea();
  }
}