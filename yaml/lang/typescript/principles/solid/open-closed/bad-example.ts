class Rectangle {
  width: number;
  height: number;
}

class Circle {
  radius: number;
}

class AreaCalculator {
  computeArea(shape: any): number {
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      return Math.PI * shape.radius * shape.radius;
    }

    return 0;
  }
}
