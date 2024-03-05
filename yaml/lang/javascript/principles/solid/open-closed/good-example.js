class Shape {
  computeArea() {
    throw new Error('Must be implemented in subclasses');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  computeArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  computeArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.computeArea()); // Output: 50

const circle = new Circle(5);
console.log(circle.computeArea()); // Output: Approximately 78.54
