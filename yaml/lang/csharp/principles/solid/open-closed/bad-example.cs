using System;

public interface IShape {
    double ComputeArea();
}

public class Rectangle : IShape {
    public double Width { get; set; }
    public double Height { get; set; }
    
    // Implementing ComputeArea for Rectangle in compliance with OCP
    public double ComputeArea() {
        return Width * Height;
    }
}

public class Circle : IShape {
    public double Radius { get; set; }
    
    // Implementing ComputeArea for Circle in compliance with OCP
    public double ComputeArea() {
        return Math.PI * Radius * Radius;
    }
}

public class AreaCalculator {
    // This method is now open for extension but closed for modification
    public double ComputeArea(IShape shape) {
        return shape.ComputeArea();
    }
}