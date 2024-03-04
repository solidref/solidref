#include <iostream>
#include <memory>

// Forward declarations of product interfaces
class Chair;
class Table;

// Abstract Factory interface
class FurnitureFactory {
public:
  virtual std::shared_ptr<Chair> createChair() const = 0;
  virtual std::shared_ptr<Table> createTable() const = 0;
  virtual ~FurnitureFactory() {}
};

// Concrete Factory: Modern Furniture Factory
class ModernFurnitureFactory : public FurnitureFactory {
public:
  std::shared_ptr<Chair> createChair() const override;
  std::shared_ptr<Table> createTable() const override;
};

// Concrete Factory: Vintage Furniture Factory
class VintageFurnitureFactory : public FurnitureFactory {
public:
  std::shared_ptr<Chair> createChair() const override;
  std::shared_ptr<Table> createTable() const override;
};

// Abstract Product: Chair
class Chair {
public:
  virtual void sitOn() const = 0;
  virtual ~Chair() {}
};

// Concrete Product: Modern Chair
class ModernChair : public Chair {
public:
  void sitOn() const override {
    std::cout << "Sitting on a modern chair." << std::endl;
  }
};

// Concrete Product: Vintage Chair
class VintageChair : public Chair {
public:
  void sitOn() const override {
    std::cout << "Sitting on a vintage chair." << std::endl;
  }
};

// Abstract Product: Table
class Table {
public:
  virtual void putOn() const = 0;
  virtual ~Table() {}
};

// Concrete Product: Modern Table
class ModernTable : public Table {
public:
  void putOn() const override {
    std::cout << "Putting something on a modern table." << std::endl;
  }
};

// Concrete Product: Vintage Table
class VintageTable : public Table {
public:
  void putOn() const override {
    std::cout << "Putting something on a vintage table." << std::endl;
  }
};

std::shared_ptr<Chair> ModernFurnitureFactory::createChair() const {
  return std::make_shared<ModernChair>();
}

std::shared_ptr<Table> ModernFurnitureFactory::createTable() const {
  return std::make_shared<ModernTable>();
}

std::shared_ptr<Chair> VintageFurnitureFactory::createChair() const {
  return std::make_shared<VintageChair>();
}

std::shared_ptr<Table> VintageFurnitureFactory::createTable() const {
  return std::make_shared<VintageTable>();
}
void createFurniture(const FurnitureFactory &factory) {
  auto chair = factory.createChair();
  auto table = factory.createTable();

  std::cout << "Created furniture:" << std::endl;
  chair->sitOn();
  table->putOn();
}

int main() {
  std::cout << "Creating modern furniture:" << std::endl;
  ModernFurnitureFactory modernFactory;
  createFurniture(modernFactory);

  std::cout << "\nCreating vintage furniture:" << std::endl;
  VintageFurnitureFactory vintageFactory;
  createFurniture(vintageFactory);

  return 0;
}

/**
 * The FurnitureFactory interface declares methods for creating chairs and
 * tables.
 *
 * Concrete factories (ModernFurnitureFactory and VintageFurnitureFactory)
 * implement the FurnitureFactory interface to produce modern and vintage
 * furniture, respectively.
 *
 * The Chair interface declares a method for sitting on a chair, and concrete
 * chair classes (ModernChair and VintageChair) implement this interface.
 *
 * The Table interface declares a method for putting something on a table, and
 * concrete table classes (ModernTable and VintageTable) implement this
 * interface. The createFurniture function acts as a client and receives a
 * FurnitureFactory as a parameter. It creates a chair and a table using the
 * factory and then performs actions on the created furniture.
 *
 */
