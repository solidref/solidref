trait Workshop {
    fn work(&self);
}

struct PaintWorkshop;

impl Workshop for PaintWorkshop {
    fn work(&self) {
        println!("Painting vehicle");
    }
}

struct RepairWorkshop;

impl Workshop for RepairWorkshop {
    fn work(&self) {
        println!("Repairing vehicle");
    }
}

// The Abstraction: Vehicle, now a trait in Rust
trait Vehicle {
    fn manufacture(&self);
}

// Refined Abstraction: Car, implementing Vehicle
struct Car<T: Workshop> {
    workshop: T,
}

impl<T: Workshop> Vehicle for Car<T> {
    fn manufacture(&self) {
        println!("Manufacturing car.");
        self.workshop.work();
    }
}

// Refined Abstraction: Truck, implementing Vehicle
struct Truck<T: Workshop> {
    workshop: T,
}

impl<T: Workshop> Vehicle for Truck<T> {
    fn manufacture(&self) {
        println!("Manufacturing truck.");
        self.workshop.work();
    }
}

// Client code
fn main() {
    let car = Car {
        workshop: PaintWorkshop,
    };
    car.manufacture(); // Output: Manufacturing car. Painting vehicle

    let truck = Truck {
        workshop: RepairWorkshop,
    };
    truck.manufacture(); // Output: Manufacturing truck. Repairing vehicle

    // The Vehicle trait represents the abstraction, which is implemented by Car and Truck.
    //
    // The Workshop trait represents the implementor, defining the work method.
    //
    // PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop trait.
    //
    // Each vehicle can be associated with a specific workshop using generic types, and it delegates the work to that workshop.
}