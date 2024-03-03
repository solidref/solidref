// Visitor interface
interface AnimalVisitor {
  visitLion(lion: Lion): void;
  visitElephant(elephant: Elephant): void;
  visitGiraffe(giraffe: Giraffe): void;
}

// Concrete visitor implementing the operations on animals
class AnimalFeeder implements AnimalVisitor {
  visitLion(lion: Lion): void {
    console.log(`Feeding meat to ${lion.getName()}.`);
  }

  visitElephant(elephant: Elephant): void {
    console.log(`Feeding hay to ${elephant.getName()}.`);
  }

  visitGiraffe(giraffe: Giraffe): void {
    console.log(`Feeding leaves to ${giraffe.getName()}.`);
  }
}

// Element interface representing animals
interface Animal {
  accept(visitor: AnimalVisitor): void;
}

// Concrete elements representing different types of animals
class Lion implements Animal {
  constructor(private name: string) { }

  getName(): string {
    return this.name;
  }

  accept(visitor: AnimalVisitor): void {
    visitor.visitLion(this);
  }
}

class Elephant implements Animal {
  constructor(private name: string) { }

  getName(): string {
    return this.name;
  }

  accept(visitor: AnimalVisitor): void {
    visitor.visitElephant(this);
  }
}

class Giraffe implements Animal {
  constructor(private name: string) { }

  getName(): string {
    return this.name;
  }

  accept(visitor: AnimalVisitor): void {
    visitor.visitGiraffe(this);
  }
}

// Object structure containing the collection of animals
class Zoo {
  private animals: Animal[] = [];

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  // Perform the operation defined by the visitor on each animal
  performOperation(visitor: AnimalVisitor): void {
    this.animals.forEach(animal => {
      animal.accept(visitor);
    });
  }
}

// Client code
const zoo = new Zoo();
zoo.addAnimal(new Lion("Simba"));
zoo.addAnimal(new Elephant("Dumbo"));
zoo.addAnimal(new Giraffe("Melman"));

const feeder = new AnimalFeeder();
zoo.performOperation(feeder);

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
