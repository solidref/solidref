class Bird {
  public void fly() {
    System.out.println("Bird is flying");
  }
}

class Duck extends Bird {
  public void quack() {
    System.out.println("Duck is quacking");
  }
}

// Renaming Goose to Penguin for clarity, given the behavior
class Penguin extends Bird {
  // Removing the fly method override to adhere to LSP
  public void swim() {
    System.out.println("Penguin is swimming");
  }
}

public class Main {
  public static void makeBirdFly(Bird bird) {
    bird.fly();
  }

  public static void main(String[] args) {
    Duck duck = new Duck();
    Penguin penguin = new Penguin();

    makeBirdFly(duck); // Output: Bird is flying
    // This next line is a problem for LSP, so we shouldn't attempt to make a penguin fly.
    // makeBirdFly(penguin); // This would incorrectly imply penguins can fly, which violates LSP.
  }
}
