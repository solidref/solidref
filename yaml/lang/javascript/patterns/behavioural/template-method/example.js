class Breakfast {
  // Template method
  prepare() {
    this.boilWater();
    this.addIngredients();
    this.cook();
    this.serve();
  }

  // Placeholder methods for steps that will vary
  addIngredients() {
    throw new Error('Method "addIngredients()" must be implemented.');
  }

  cook() {
    throw new Error('Method "cook()" must be implemented.');
  }

  // Concrete methods
  boilWater() {
    console.log("Boiling water...");
  }

  serve() {
    console.log("Breakfast is served!");
  }
}

class OmeletteBreakfast extends Breakfast {
  addIngredients() {
    console.log("Adding eggs, cheese, and vegetables to the pan.");
  }

  cook() {
    console.log("Cooking the omelette until golden brown.");
  }
}

class PancakeBreakfast extends Breakfast {
  addIngredients() {
    console.log("Mixing flour, eggs, milk, and sugar to make the batter.");
  }

  cook() {
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
