// Abstraction: Vehicle
abstract class Vehicle {
  protected workshop: Workshop;

  constructor(workshop: Workshop) {
    this.workshop = workshop;
  }

  abstract manufacture(): void;
}

// Implementor: Workshop
interface Workshop {
  work(): void;
}

// Concrete Implementor: Paint Workshop
class PaintWorkshop implements Workshop {
  work(): void {
    console.log('Painting vehicle');
  }
}

// Concrete Implementor: Repair Workshop
class RepairWorkshop implements Workshop {
  work(): void {
    console.log('Repairing vehicle');
  }
}

// Refined Abstraction: Car
class Car extends Vehicle {
  manufacture(): void {
    console.log('Manufacturing car.');
    this.workshop.work();
  }
}

// Refined Abstraction: Truck
class Truck extends Vehicle {
  manufacture(): void {
    console.log('Manufacturing truck.');
    this.workshop.work();
  }
}

// Client code
const car = new Car(new PaintWorkshop());
car.manufacture(); // Output: Manufacturing car. Painting vehicle

const truck = new Truck(new RepairWorkshop());
truck.manufacture(); // Output: Manufacturing truck. Repairing vehicle

/**
 * The Vehicle class represents the abstraction, which is extended by Car and Truck.
 *
 * The Workshop interface represents the implementor, defining the work method.
 *
 * PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.
 *
 * Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
 */
