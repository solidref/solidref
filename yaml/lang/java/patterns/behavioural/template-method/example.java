// Breakfast.java
abstract class Breakfast {
  // Template method
  public final void prepare() {
    boilWater();
    addIngredients();
    cook();
    serve();
  }

  // Abstract methods to be implemented by subclasses
  abstract void addIngredients();
  abstract void cook();

  // Concrete methods
  void boilWater() {
    System.out.println("Boiling water...");
  }

  void serve() {
    System.out.println("Breakfast is served!");
  }
}

// OmeletteBreakfast.java
class OmeletteBreakfast extends Breakfast {
  @Override
  void addIngredients() {
    System.out.println("Adding eggs, cheese, and vegetables to the pan.");
  }

  @Override
  void cook() {
    System.out.println("Cooking the omelette until golden brown.");
  }
}

// PancakeBreakfast.java
class PancakeBreakfast extends Breakfast {
  @Override
  void addIngredients() {
    System.out.println("Mixing flour, eggs, milk, and sugar to make the batter.");
  }

  @Override
  void cook() {
    System.out.println("Pouring the batter onto the griddle and flipping until cooked.");
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    System.out.println("Preparing Omelette Breakfast:");
    Breakfast omeletteBreakfast = new OmeletteBreakfast();
    omeletteBreakfast.prepare();

    System.out.println("\nPreparing Pancake Breakfast:");
    Breakfast pancakeBreakfast = new PancakeBreakfast();
    pancakeBreakfast.prepare();
  }
}

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
