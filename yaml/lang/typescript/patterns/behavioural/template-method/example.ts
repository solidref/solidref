abstract class Breakfast {
  // Template method
  prepare(): void {
    this.boilWater();
    this.addIngredients();
    this.cook();
    this.serve();
  }

  // Abstract methods to be implemented by subclasses
  abstract addIngredients(): void;
  abstract cook(): void;

  // Concrete methods
  boilWater(): void {
    console.log("Boiling water...");
  }

  serve(): void {
    console.log("Breakfast is served!");
  }
}

class OmeletteBreakfast extends Breakfast {
  addIngredients(): void {
    console.log("Adding eggs, cheese, and vegetables to the pan.");
  }

  cook(): void {
    console.log("Cooking the omelette until golden brown.");
  }
}

class PancakeBreakfast extends Breakfast {
  addIngredients(): void {
    console.log("Mixing flour, eggs, milk, and sugar to make the batter.");
  }

  cook(): void {
    console.log("Pouring the batter onto the griddle and flipping until cooked.");
  }
}

// Client code
console.log("Preparing Omelette Breakfast:");
const omeletteBreakfast = new OmeletteBreakfast();
omeletteBreakfast.prepare();

console.log("\nPreparing Pancake Breakfast:");
const pancakeBreakfast = new PancakeBreakfast();
pancakeBreakfast.prepare();

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
