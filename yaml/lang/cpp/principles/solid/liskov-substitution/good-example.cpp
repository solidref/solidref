#include <iostream>

// Base class Bird with a fly method
class Bird {
public:
  virtual void fly() const { std::cout << "Bird is flying" << std::endl; }
  virtual ~Bird() {} // Virtual destructor for proper cleanup of derived objects
};

// Derived class Duck from Bird, adds quacking behavior
class Duck : public Bird {
public:
  void quack() const { std::cout << "Duck is quacking" << std::endl; }
};

// Derived class Goose from Bird, replaces flying with swimming
class Goose : public Bird {
public:
  void swim() const { std::cout << "Goose is swimming" << std::endl; }
  void fly() const override {
    std::cout << "Goose is flying"
              << std::endl; // Goose can also fly, corrected "Penguin" to
                            // "Goose" for consistency
  }
};

// Function to make any bird fly
void makeBirdFly(const Bird &bird) { bird.fly(); }

// Example usage
int main() {
  Duck duck;
  Goose goose;

  makeBirdFly(duck);  // Output: Bird is flying
  makeBirdFly(goose); // Output: Goose is flying, adjusted to reflect Goose's
                      // ability to fly

  return 0;
}
