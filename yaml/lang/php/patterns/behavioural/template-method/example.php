<?php

abstract class Breakfast {
  // Template method
  public function prepare(): void {
    $this->boilWater();
    $this->addIngredients();
    $this->cook();
    $this->serve();
  }

  // Abstract methods to be implemented by subclasses
  abstract protected function addIngredients(): void;
  abstract protected function cook(): void;

  // Concrete methods
  protected function boilWater(): void {
    echo "Boiling water...\n";
  }

  protected function serve(): void {
    echo "Breakfast is served!\n";
  }
}

class OmeletteBreakfast extends Breakfast {
  protected function addIngredients(): void {
    echo "Adding eggs, cheese, and vegetables to the pan.\n";
  }

  protected function cook(): void {
    echo "Cooking the omelette until golden brown.\n";
  }
}

class PancakeBreakfast extends Breakfast {
  protected function addIngredients(): void {
    echo "Mixing flour, eggs, milk, and sugar to make the batter.\n";
  }

  protected function cook(): void {
    echo "Pouring the batter onto the griddle and flipping until cooked.\n";
  }
}

// Client code
echo "Preparing Omelette Breakfast:\n";
$omeletteBreakfast = new OmeletteBreakfast();
$omeletteBreakfast->prepare();

echo "\nPreparing Pancake Breakfast:\n";
$pancakeBreakfast = new PancakeBreakfast();
$pancakeBreakfast->prepare();

/**
 * In this example, we have an abstract class Breakfast representing the template method pattern. It defines
 * the steps of preparing breakfast in the prepare() method, which serves as the template method. The abstract
 * methods addIngredients() and cook() are placeholders for the specific steps that vary between different
 * types of breakfasts.
 *
 * Subclasses such as OmeletteBreakfast and PancakeBreakfast extend the Breakfast class and implement the
 * abstract methods to provide specific implementations for adding ingredients and cooking. The template
 * method prepare() orchestrates the sequence of steps required to prepare each type of breakfast.
 *
 */
?>