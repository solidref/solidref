trait Shape {
    // Define a method in the trait, which will be implemented by subclasses
    fn compute_area(&self) -> f64;
}

struct Rectangle {
    width: f64,
    height: f64,
}

impl Shape for Rectangle {
    // Implement compute_area for Rectangle
    fn compute_area(&self) -> f64 {
        self.width * self.height
    }
}

struct Circle {
    radius: f64,
}

impl Shape for Circle {
    // Implement compute_area for Circle
    fn compute_area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}