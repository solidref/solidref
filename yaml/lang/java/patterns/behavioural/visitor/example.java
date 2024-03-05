// AnimalVisitor.java
interface AnimalVisitor {
  void visitLion(Lion lion);
  void visitElephant(Elephant elephant);
  void visitGiraffe(Giraffe giraffe);
}

// AnimalFeeder.java
class AnimalFeeder implements AnimalVisitor {
  @Override
  public void visitLion(Lion lion) {
    System.out.println("Feeding meat to " + lion.getName() + ".");
  }

  @Override
  public void visitElephant(Elephant elephant) {
    System.out.println("Feeding hay to " + elephant.getName() + ".");
  }

  @Override
  public void visitGiraffe(Giraffe giraffe) {
    System.out.println("Feeding leaves to " + giraffe.getName() + ".");
  }
}

// Animal.java
interface Animal {
  void accept(AnimalVisitor visitor);
  String getName();
}

// Lion.java
class Lion implements Animal {
  private String name;

  public Lion(String name) {
    this.name = name;
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public void accept(AnimalVisitor visitor) {
    visitor.visitLion(this);
  }
}

// Elephant.java
class Elephant implements Animal {
  private String name;

  public Elephant(String name) {
    this.name = name;
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public void accept(AnimalVisitor visitor) {
    visitor.visitElephant(this);
  }
}

// Giraffe.java
class Giraffe implements Animal {
  private String name;

  public Giraffe(String name) {
    this.name = name;
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public void accept(AnimalVisitor visitor) {
    visitor.visitGiraffe(this);
  }
}

// Zoo.java
class Zoo {
  private java.util.List<Animal> animals = new java.util.ArrayList<>();

  public void addAnimal(Animal animal) {
    animals.add(animal);
  }

  public void performOperation(AnimalVisitor visitor) {
    for (Animal animal : animals) {
      animal.accept(visitor);
    }
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Zoo zoo = new Zoo();
    zoo.addAnimal(new Lion("Simba"));
    zoo.addAnimal(new Elephant("Dumbo"));
    zoo.addAnimal(new Giraffe("Melman"));

    AnimalFeeder feeder = new AnimalFeeder();
    zoo.performOperation(feeder);
  }
}


/**
 * The AnimalVisitor interface defines the operations that can be performed on different types of animals.
 *
 * The AnimalFeeder class is a concrete visitor that implements feeding operations for lions, elephants,
 * and giraffes.
 *
 * The Animal interface represents animals, and concrete animal classes (Lion, Elephant, and Giraffe)
 * implement this interface and define how they accept a visitor.
 *
 * The Zoo class represents the object structure that contains a collection of animals. It has methods to
 * add animals and perform an operation (feeding in this case) using a visitor.
 *
 * Finally, in the client code, we create a zoo, add animals to it, create a visitor (animal feeder), and
 * then perform the feeding operation on each animal in the zoo using the visitor.
 */
