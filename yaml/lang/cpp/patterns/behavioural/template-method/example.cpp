#include <iostream>

// Abstract Base Class with Template Method

class Breakfast {
public:
  // Template method
  void prepare() {
    boilWater();
    addIngredients();
    cook();
    serve();
  }

  // Destructor
  virtual ~Breakfast() {}

protected:
  // Abstract methods to be implemented by subclasses
  virtual void addIngredients() = 0;
  virtual void cook() = 0;

  // Concrete methods
  void boilWater() { std::cout << "Boiling water..." << std::endl; }

  void serve() { std::cout << "Breakfast is served!" << std::endl; }
};

// Concrete Subclasses Implementing the Specific Steps

class OmeletteBreakfast : public Breakfast {
protected:
  void addIngredients() override {
    std::cout << "Adding eggs, cheese, and vegetables to the pan." << std::endl;
  }

  void cook() override {
    std::cout << "Cooking the omelette until golden brown." << std::endl;
  }
};

class PancakeBreakfast : public Breakfast {
protected:
  void addIngredients() override {
    std::cout << "Mixing flour, eggs, milk, and sugar to make the batter."
              << std::endl;
  }

  void cook() override {
    std::cout
        << "Pouring the batter onto the griddle and flipping until cooked."
        << std::endl;
  }
};

int main() {
  std::cout << "Preparing Omelette Breakfast:" << std::endl;
  OmeletteBreakfast omeletteBreakfast;
  omeletteBreakfast.prepare();

  std::cout << "\nPreparing Pancake Breakfast:" << std::endl;
  PancakeBreakfast pancakeBreakfast;
  pancakeBreakfast.prepare();

  return 0;
}

/**
 * In this example, we have an abstract class Breakfast representing the
 * template method pattern. It defines the steps of preparing breakfast in the
 * prepare() method, which serves as the template method. The abstract methods
 * addIngredients() and cook() are placeholders for the specific steps that vary
 * between different types of breakfasts.
 *
 * Subclasses such as OmeletteBreakfast and PancakeBreakfast extend the
 * Breakfast class and implement the abstract methods to provide specific
 * implementations for adding ingredients and cooking. The template method
 * prepare() orchestrates the sequence of steps required to prepare each type of
 * breakfast.
 *
 */
