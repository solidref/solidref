using System;

// Implementor: Workshop
public interface IWorkshop {
    void Work();
}

// Concrete Implementor: Paint Workshop
public class PaintWorkshop : IWorkshop {
    public void Work() {
        Console.WriteLine("Painting vehicle");
    }
}

// Concrete Implementor: Repair Workshop
public class RepairWorkshop : IWorkshop {
    public void Work() {
        Console.WriteLine("Repairing vehicle");
    }
}

// Abstraction: Vehicle
public abstract class Vehicle {
    protected IWorkshop workshop;

    public Vehicle(IWorkshop workshop) {
        this.workshop = workshop;
    }

    public abstract void Manufacture();
}

// Refined Abstraction: Car
public class Car : Vehicle {
    public Car(IWorkshop workshop) : base(workshop) { }

    public override void Manufacture() {
        Console.WriteLine("Manufacturing car.");
        workshop.Work();
    }
}

// Refined Abstraction: Truck
public class Truck : Vehicle {
    public Truck(IWorkshop workshop) : base(workshop) { }

    public override void Manufacture() {
        Console.WriteLine("Manufacturing truck.");
        workshop.Work();
    }
}

// Client code
public class Client {
    public static void Main(string[] args) {
        var car = new Car(new PaintWorkshop());
        car.Manufacture(); // Output: Manufacturing car. Painting vehicle

        var truck = new Truck(new RepairWorkshop());
        truck.Manufacture(); // Output: Manufacturing truck. Repairing vehicle

        /*
         * The Vehicle class represents the abstraction, which is extended by Car and Truck.
         *
         * The IWorkshop interface represents the implementor, defining the work method.
         *
         * PaintWorkshop and RepairWorkshop are concrete implementations of the IWorkshop interface.
         *
         * Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
         */
    }
}