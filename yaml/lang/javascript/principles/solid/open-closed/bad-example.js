class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  computeArea(shape) {
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      return Math.PI * Math.pow(shape.radius, 2);
    }

    // Needs modification for each new shape type, violating the Open/Closed Principle
    return 0;
  }
}

// Usage
const rectangle = new Rectangle(5, 10);
const circle = new Circle(5);
const calculator = new AreaCalculator();

console.log(calculator.computeArea(rectangle)); // Output: 50
console.log(calculator.computeArea(circle)); // Output: Approximately 78.54
