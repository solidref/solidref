```php
<?php

// Implementor: Workshop
interface Workshop {
    public function work();
}

// Concrete Implementor: Paint Workshop
class PaintWorkshop implements Workshop {
    public function work() {
        echo 'Painting vehicle' . PHP_EOL;
    }
}

// Concrete Implementor: Repair Workshop
class RepairWorkshop implements Workshop {
    public function work() {
        echo 'Repairing vehicle' . PHP_EOL;
    }
}

// Abstraction: Vehicle
abstract class Vehicle {
    protected $workshop;

    public function __construct(Workshop $workshop) {
        $this->workshop = $workshop;
    }

    abstract public function manufacture();
}

// Refined Abstraction: Car
class Car extends Vehicle {
    public function manufacture() {
        echo 'Manufacturing car.' . PHP_EOL;
        $this->workshop->work();
    }
}

// Refined Abstraction: Truck
class Truck extends Vehicle {
    public function manufacture() {
        echo 'Manufacturing truck.' . PHP_EOL;
        $this->workshop->work();
    }
}

// Client code
$car = new Car(new PaintWorkshop());
$car->manufacture(); // Output: Manufacturing car. Painting vehicle

$truck = new Truck(new RepairWorkshop());
$truck->manufacture(); // Output: Manufacturing truck. Repairing vehicle

/**
 * The Vehicle class represents the abstraction, which is extended by Car and Truck.
 *
 * The Workshop interface represents the implementor, defining the work method.
 *
 * PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.
 *
 * Each vehicle can be associated with a specific workshop using composition, and it delegates the work to that workshop.
 */
```