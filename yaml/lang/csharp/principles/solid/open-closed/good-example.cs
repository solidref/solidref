using System;

abstract class Shape {
    // Shape now defines a contract for computeArea. 
    // Any shape must implement this method.
    public abstract double ComputeArea();
}

class Rectangle : Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // Rectangle implements the computeArea method, providing its specific logic.
    public override double ComputeArea() => width * height;
}

class Circle : Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    // Circle implements the computeArea method, providing its specific logic.
    public override double ComputeArea() => Math.PI * Math.Pow(radius, 2);
}