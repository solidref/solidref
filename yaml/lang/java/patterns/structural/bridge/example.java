// Abstraction: Vehicle
// Workshop.java (Implementor)
interface Workshop {
  void work();
}

// PaintWorkshop.java (Concrete Implementor)
class PaintWorkshop implements Workshop {
  @Override
  public void work() {
    System.out.println("Painting vehicle");
  }
}

// RepairWorkshop.java (Concrete Implementor)
class RepairWorkshop implements Workshop {
  @Override
  public void work() {
    System.out.println("Repairing vehicle");
  }
}

// Vehicle.java (Abstraction)
abstract class Vehicle {
  protected Workshop workshop;

  protected Vehicle(Workshop workshop) {
    this.workshop = workshop;
  }

  abstract void manufacture();
}

// Car.java (Refined Abstraction)
class Car extends Vehicle {
  public Car(Workshop workshop) {
    super(workshop);
  }

  @Override
  void manufacture() {
    System.out.print("Manufacturing car. ");
    workshop.work();
  }
}

// Truck.java (Refined Abstraction)
class Truck extends Vehicle {
  public Truck(Workshop workshop) {
    super(workshop);
  }

  @Override
  void manufacture() {
    System.out.print("Manufacturing truck. ");
    workshop.work();
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Vehicle car = new Car(new PaintWorkshop());
    car.manufacture(); // Output: Manufacturing car. Painting vehicle

    Vehicle truck = new Truck(new RepairWorkshop());
    truck.manufacture(); // Output: Manufacturing truck. Repairing vehicle
  }
}

/**
 * The Vehicle class represents the abstraction, which is extended by Car and Truck.
 *
 * The Workshop interface represents the implementor, defining the work method.
 *
 * PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.
 *
 * Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
 */
