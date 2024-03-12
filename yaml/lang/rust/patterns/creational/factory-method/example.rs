trait Vehicle {
    fn drive(&self);
}

struct Car;

impl Vehicle for Car {
    fn drive(&self) {
        println!("Driving a car...");
    }
}

struct Truck;

impl Vehicle for Truck {
    fn drive(&self) {
        println!("Driving a truck...");
    }
}

trait VehicleFactory {
    fn create_vehicle(&self) -> Box<dyn Vehicle>;

    fn deliver_vehicle(&self) {
        let vehicle = self.create_vehicle();
        println!("Delivering the vehicle...");
        vehicle.drive();
    }
}

struct CarFactory;

impl VehicleFactory for CarFactory {
    fn create_vehicle(&self) -> Box<dyn Vehicle> {
        println!("Creating a car...");
        Box::new(Car)
    }
}

struct TruckFactory;

impl VehicleFactory for TruckFactory {
    fn create_vehicle(&self) -> Box<dyn Vehicle> {
        println!("Creating a truck...");
        Box::new(Truck)
    }
}

fn main() {
    let car_factory = CarFactory;
    car_factory.deliver_vehicle();

    let truck_factory = TruckFactory;
    truck_factory.deliver_vehicle();
}