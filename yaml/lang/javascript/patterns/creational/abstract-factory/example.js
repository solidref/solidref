// Concrete Factory 1: Modern Furniture Factory
class ModernFurnitureFactory {
  createChair() {
    return new ModernChair();
  }

  createTable() {
    return new ModernTable();
  }
}

// Concrete Factory 2: Vintage Furniture Factory
class VintageFurnitureFactory {
  createChair() {
    return new VintageChair();
  }

  createTable() {
    return new VintageTable();
  }
}

// Concrete Product: Modern Chair
class ModernChair {
  sitOn() {
    console.log("Sitting on a modern chair.");
  }
}

// Concrete Product: Vintage Chair
class VintageChair {
  sitOn() {
    console.log("Sitting on a vintage chair.");
  }
}

// Concrete Product: Modern Table
class ModernTable {
  putOn() {
    console.log("Putting something on a modern table.");
  }
}

// Concrete Product: Vintage Table
class VintageTable {
  putOn() {
    console.log("Putting something on a vintage table.");
  }
}

// Client code function to create furniture using the provided factory
function createFurniture(factory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  console.log("Created furniture:");
  chair.sitOn();
  table.putOn();
}

// Creating modern furniture
console.log("Creating modern furniture:");
createFurniture(new ModernFurnitureFactory());

// Creating vintage furniture
console.log("\nCreating vintage furniture:");
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
