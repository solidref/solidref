<?php

interface FurnitureFactory {
  public function createChair(): Chair;
  public function createTable(): Table;
}

class ModernFurnitureFactory implements FurnitureFactory {
  public function createChair(): Chair {
    return new ModernChair();
  }

  public function createTable(): Table{
    return new ModernTable();
  }
}

class VintageFurnitureFactory implements FurnitureFactory {
  public function createChair(): Chair {
    return new VintageChair();
  }

  public function createTable(): Table {
    return new VintageTable();
  }
}

interface Chair {
  public function sitOn();
}

class ModernChair implements Chair {
  public function sitOn() {
    echo "Sitting on a modern chair.\n";
  }
}

class VintageChair implements Chair {
  public function sitOn() {
    echo "Sitting on a vintage chair.\n";
  }
}

interface Table {
  public function putOn();
}

class ModernTable implements Table {
  public function putOn() {
    echo "Putting something on a modern table.\n";
  }
}

class VintageTable implements Table {
  public function putOn() {
    echo "Putting something on a vintage table.\n";
  }
}

function createFurniture(FurnitureFactory $factory) {
  $chair = $factory->createChair();
  $table = $factory->createTable();

  echo "Created furniture:\n";
  $chair->sitOn();
  $table->putOn();
}

echo "Creating modern furniture:\n";
createFurniture(new ModernFurnitureFactory());

echo "\nCreating vintage furniture:\n";
createFurniture(new VintageFurnitureFactory());

/**
 * The FurnitureFactory interface declares methods for creating chairs and tables.
 *
 * Concrete factories (ModernFurnitureFactory and VintageFurnitureFactory) implement the
 * FurnitureFactory interface to produce modern and vintage furniture, respectively.
 *
 * The Chair interface declares a method for sitting on a chair, and concrete chair classes
 * (ModernChair and VintageChair) implement this interface.
 *
 * The Table interface declares a method for putting something on a table, and concrete table
 * classes (ModernTable and VintageTable) implement this interface.
 * The createFurniture function acts as a client and receives a FurnitureFactory as a parameter.
 * It creates a chair and a table using the factory and then performs actions on the created furniture.
 *
 */
?>