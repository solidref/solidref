class Bird {
  public void fly() {
    // Implementation that allows flying
    System.out.println("Bird is flying");
  }
}

class Ostrich extends Bird {
  @Override
  public void fly() {
    // Ostrich should not fly according to real-world behavior, so this implementation is problematic
    throw new UnsupportedOperationException("Can't fly");
  }
}

public class Main {
  public static void makeItFly(Bird flyer) {
    flyer.fly();
  }

  public static void main(String[] args) {
    Sparrow sparrow = new Sparrow();
    Ostrich ostrich = new Ostrich();

    makeItFly(sparrow); // Works fine
    makeItFly(ostrich); // This line will throw an error
  }
}
