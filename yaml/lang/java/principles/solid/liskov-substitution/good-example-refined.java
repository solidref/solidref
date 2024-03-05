interface Flyable {
    void fly();
}

class Bird {
}

class Duck extends Bird implements Flyable {
    public void fly() {
        System.out.println("Duck is flying");
    }

    public void quack() {
        System.out.println("Duck is quacking");
    }
}

class Penguin extends Bird {
    public void swim() {
        System.out.println("Penguin is swimming");
    }
}

public class Main {
    public static void makeItFly(Flyable flyer) {
        flyer.fly();
    }

    public static void main(String[] args) {
        Duck duck = new Duck();
        Penguin penguin = new Penguin();

        makeItFly(duck); // Correctly applies only to birds that can fly
        // Penguins don't implement Flyable, so we don't try to make them fly.
    }
}
