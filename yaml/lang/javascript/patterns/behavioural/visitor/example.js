// Concrete visitor implementing the operations on animals
class AnimalFeeder {
  visitLion(lion) {
    console.log(`Feeding meat to ${lion.getName()}.`);
  }

  visitElephant(elephant) {
    console.log(`Feeding hay to ${elephant.getName()}.`);
  }

  visitGiraffe(giraffe) {
    console.log(`Feeding leaves to ${giraffe.getName()}.`);
  }
}

// Concrete elements representing different types of animals
class Lion {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  accept(visitor) {
    visitor.visitLion(this);
  }
}

class Elephant {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  accept(visitor) {
    visitor.visitElephant(this);
  }
}

class Giraffe {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  accept(visitor) {
    visitor.visitGiraffe(this);
  }
}

// Object structure containing the collection of animals
class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  // Perform the operation defined by the visitor on each animal
  performOperation(visitor) {
    this.animals.forEach(animal => animal.accept(visitor));
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
