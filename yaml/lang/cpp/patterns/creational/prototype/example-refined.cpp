#include <iostream>
#include <memory>
#include <string>

// Prototype Interface and Concrete Prototype First, we define a GameCharacter
// abstract class to serve as the Prototype interface, and then we implement
// concrete character classes that can be cloned.

// Prototype Interface
class GameCharacter {
public:
  virtual std::unique_ptr<GameCharacter> clone() const = 0;
  virtual void displayAttributes() const = 0;
  virtual ~GameCharacter() {}
};

// Concrete Prototype: Warrior
class Warrior : public GameCharacter {
  std::string weapon;
  int strength;

public:
  Warrior(const std::string &weapon, int strength)
      : weapon(weapon), strength(strength) {}

  std::unique_ptr<GameCharacter> clone() const override {
    return std::make_unique<Warrior>(*this);
  }

  void displayAttributes() const override {
    std::cout << "Warrior with weapon: " << weapon
              << " and strength: " << strength << std::endl;
  }
};

// Concrete Prototype: Mage
class Mage : public GameCharacter {
  std::string spell;
  int mana;

public:
  Mage(const std::string &spell, int mana) : spell(spell), mana(mana) {}

  std::unique_ptr<GameCharacter> clone() const override {
    return std::make_unique<Mage>(*this);
  }

  void displayAttributes() const override {
    std::cout << "Mage with spell: " << spell << " and mana: " << mana
              << std::endl;
  }
};

// Cloning Mechanism in Action Now, let's demonstrate how to use the cloning
// mechanism to create copies of game characters with predefined attributes.

int main() {
  // Original characters
  Warrior originalWarrior("Sword", 100);
  Mage originalMage("Fireball", 200);

  // Clone characters
  auto clonedWarrior = originalWarrior.clone();
  auto clonedMage = originalMage.clone();

  // Display attributes of original and cloned characters
  std::cout << "Original Warrior:" << std::endl;
  originalWarrior.displayAttributes();

  std::cout << "\nCloned Warrior:" << std::endl;
  clonedWarrior->displayAttributes();

  std::cout << "\nOriginal Mage:" << std::endl;
  originalMage.displayAttributes();

  std::cout << "\nCloned Mage:" << std::endl;
  clonedMage->displayAttributes();

  return 0;
}

// Deep Copy Cloning: The Prototype pattern is used to create exact copies (deep
// copies) of game character objects, preserving their state.

// Polymorphism and Smart Pointers: The example leverages polymorphism through
// the GameCharacter interface and uses std::unique_ptr for safe memory
// management and ownership semantics of cloned objects.

// Flexibility and Scalability: New character types can be added to the game
// without changing the cloning logic. This pattern provides a scalable solution
// for object creation in scenarios where objects have numerous attributes or
// configurations.

// This advanced example demonstrates the Prototype Design Pattern's utility in
// a context requiring complex object cloning, such as game development,
// highlighting its strengths in flexibility, scalability, and memory safety in
// C++.
