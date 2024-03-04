#include <iostream>
#include <stdexcept> // For std::runtime_error

class Bird {
public:
  virtual void fly() const { std::cout << "Bird is flying" << std::endl; }
  virtual ~Bird() {} // Ensure proper cleanup of derived objects
};

class Ostrich : public Bird {
public:
  void fly() const override {
    throw std::runtime_error(
        "Can't fly"); // Ostrich, being a Bird, should not alter the expected
                      // behavior of the fly method
  }
};

// Function to attempt to make any bird fly
void makeBirdFly(const Bird &bird) {
  try {
    bird.fly();
  } catch (const std::runtime_error &e) {
    std::cerr << "Error: " << e.what() << std::endl;
  }
}

// Example usage
int main() {
  Bird bird;
  Ostrich ostrich;

  makeBirdFly(bird);    // Expected to fly without issues
  makeBirdFly(ostrich); // Expected to throw a runtime error

  return 0;
}
