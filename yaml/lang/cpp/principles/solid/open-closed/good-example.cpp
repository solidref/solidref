class Shape {
  computeArea(): number {
    throw new Error('Must be implemented in subclasses');
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) { super(); }

  computeArea(): number { return this.width * this.height; }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }

  computeArea(): number { return Math.PI * Math.pow(this.radius, 2); }
}
