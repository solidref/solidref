trait Bird {
    fn fly(&self);
}

struct FlyingBird;
impl Bird for FlyingBird {
    fn fly(&self) {
        // Implementation for birds that can fly
    }
}

struct Ostrich;
impl Bird for Ostrich {
    fn fly(&self) {
        panic!("Can't fly"); // Ostrich, being a Bird, should not attempt to implement fly
    }
}

// A more idiomatic approach in Rust involves separating the concepts of flying
// and not flying into different traits or avoiding calling fly on an Ostrich.

trait Fly {
    fn fly(&self);
}

struct Sparrow; // Sparrow can fly
impl Fly for Sparrow {
    fn fly(&self) {
        // Implementation for flying
    }
}

// Bird now does not require fly method
trait Bird {}

impl Bird for Sparrow {} // Sparrow is a Bird
impl Bird for Ostrich {} // Ostrich is also a Bird but does not implement Fly, avoiding the violation of Liskov Substitution Principle.