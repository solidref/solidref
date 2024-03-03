

/**
 * The AnimalVisitor interface defines the operations that can be performed on
 * different types of animals.
 *
 * The AnimalFeeder class is a concrete visitor that implements feeding
 * operations for lions, elephants, and giraffes.
 *
 * The Animal interface represents animals, and concrete animal classes (Lion,
 * Elephant, and Giraffe) implement this interface and define how they accept a
 * visitor.
 *
 * The Zoo class represents the object structure that contains a collection of
 * animals. It has methods to add animals and perform an operation (feeding in
 * this case) using a visitor.
 *
 * Finally, in the client code, we create a zoo, add animals to it, create a
 * visitor (animal feeder), and then perform the feeding operation on each
 * animal in the zoo using the visitor.
 */
