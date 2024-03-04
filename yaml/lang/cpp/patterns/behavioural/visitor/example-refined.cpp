#include <iostream>
#include <memory>
#include <string>
#include <vector>

class Lion;
class Elephant;
class Giraffe;

// Visitor interface
class AnimalVisitor {
public:
  virtual void visitLion(Lion *lion) = 0;
  virtual void visitElephant(Elephant *elephant) = 0;
  virtual void visitGiraffe(Giraffe *giraffe) = 0;
  virtual ~AnimalVisitor() = default;
};

// Concrete visitor
class AnimalFeeder : public AnimalVisitor {
public:
  void visitLion(Lion *lion) override;
  void visitElephant(Elephant *elephant) override;
  void visitGiraffe(Giraffe *giraffe) override;
};

// Element interface
class Animal {
public:
  virtual void accept(AnimalVisitor *visitor) = 0;
  virtual std::string getName() const = 0;
  virtual ~Animal() = default;
};

class Lion : public Animal {
  std::string name;

public:
  Lion(const std::string &name) : name(name) {}
  void accept(AnimalVisitor *visitor) override { visitor->visitLion(this); }
  std::string getName() const override { return name; }
};

class Elephant : public Animal {
  std::string name;

public:
  Elephant(const std::string &name) : name(name) {}
  void accept(AnimalVisitor *visitor) override { visitor->visitElephant(this); }
  std::string getName() const override { return name; }
};

class Giraffe : public Animal {
  std::string name;

public:
  Giraffe(const std::string &name) : name(name) {}
  void accept(AnimalVisitor *visitor) override { visitor->visitGiraffe(this); }
  std::string getName() const override { return name; }
};
Concrete Visitor Implementation Implement the AnimalFeeder methods to feed each
    type of animal.

    cpp Copy code void
    AnimalFeeder::visitLion(Lion *lion) {
  std::cout << "Feeding meat to " << lion->getName() << "." << std::endl;
}

void AnimalFeeder::visitElephant(Elephant *elephant) {
  std::cout << "Feeding hay to " << elephant->getName() << "." << std::endl;
}

void AnimalFeeder::visitGiraffe(Giraffe *giraffe) {
  std::cout << "Feeding leaves to " << giraffe->getName() << "." << std::endl;
}

// Zoo Class and Client Code The Zoo class contains a collection of animals and
// a method to perform operations on them using a visitor.

class Zoo {
  std::vector<std::shared_ptr<Animal>> animals;

public:
  void addAnimal(const std::shared_ptr<Animal> &animal) {
    animals.push_back(animal);
  }

  void performOperation(AnimalVisitor *visitor) {
    for (auto &animal : animals) {
      animal->accept(visitor);
    }
  }
};

int main() {
  Zoo zoo;
  zoo.addAnimal(std::make_shared<Lion>("Simba"));
  zoo.addAnimal(std::make_shared<Elephant>("Dumbo"));
  zoo.addAnimal(std::make_shared<Giraffe>("Melman"));

  AnimalFeeder feeder;
  zoo.performOperation(&feeder);

  return 0;
}

// Visitor Pattern in C++: Demonstrates defining operations on elements (Lion,
// Elephant, Giraffe) outside of their classes, adhering to the open/closed
// principle.

// Polymorphism and Dynamic Binding: Uses polymorphism to apply different
// operations dynamically based on the object's type at runtime.

// Memory Management: Utilizes std::shared_ptr for automatic memory management
// of the animal objects within the Zoo class.

// This C++ example showcases how the Visitor Design Pattern enables adding new
// operations to existing object structures without modifying the structures,
// promoting flexibility and scalability in application design.
