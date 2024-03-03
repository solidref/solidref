#include <stdexcept> // Required for std::runtime_error

class Bird {
public:
  virtual void fly() {
    // Implementation for birds that can fly
  }
  virtual ~Bird() {} // Virtual destructor for proper cleanup of derived classes
};

class Ostrich : public Bird {
public:
  void fly() override {
    throw std::runtime_error(
        "Can't fly"); // Correct way to throw an exception in C++
  }
};
