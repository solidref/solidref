interface Flyable {
    void fly();
}

class Bird {
    // Base class without fly method
}

class Sparrow extends Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Sparrow is flying");
    }
}

class Ostrich extends Bird {
    // Ostrich does not implement Flyable, avoiding the LSP violation
}

public class Main {
    public static void makeItFly(Flyable flyer) {
        flyer.fly();
    }

    public static void main(String[] args) {
        Sparrow sparrow = new Sparrow();
        Ostrich ostrich = new Ostrich();

        makeItFly(sparrow); // Works fine
        // makeItFly(ostrich); // This line is now a compile-time error, which is preferable.
    }
}
