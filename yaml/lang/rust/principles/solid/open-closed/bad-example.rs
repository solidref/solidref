struct Rectangle {
    width: f64,
    height: f64,
}

struct Circle {
    radius: f64,
}

// Defining a trait for shapes that can have their area computed
trait Area {
    fn compute_area(&self) -> f64;
}

// Implementing the Area trait for Rectangle
impl Area for Rectangle {
    fn compute_area(&self) -> f64 {
        self.width * self.height
    }
}

// Implementing the Area trait for Circle
impl Area for Circle {
    fn compute_area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}

// AreaCalculator is simplified by utilizing polymorphism,
// which is more idiomatic to Rust through the use of traits.
struct AreaCalculator;

impl AreaCalculator {
    // compute_area now accepts a reference to something that implements the Area trait
    fn compute_area<T: Area>(shape: &T) -> f64 {
        shape.compute_area()
    }
}