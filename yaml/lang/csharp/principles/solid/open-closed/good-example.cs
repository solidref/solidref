using System;

// Define an abstract Shape class with a method signature for computing area
public abstract class Shape
{
    public abstract double ComputeArea();
}

// Rectangle class inherits from Shape and implements ComputeArea
public class Rectangle : Shape
{
    private double width;
    private double height;

    public Rectangle(double width, double height)
    {
        this.width = width;
        this.height = height;
    }

    public override double ComputeArea()
    {
        return width * height;
    }
}

// Circle class inherits from Shape and implements ComputeArea
public class Circle : Shape
{
    private double radius;

    public Circle(double radius)
    {
        this.radius = radius;
    }

    public override double ComputeArea()
    {
        return Math.PI * Math.Pow(radius, 2);
    }
}