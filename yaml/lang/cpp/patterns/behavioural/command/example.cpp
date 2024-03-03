// Define the Iterator interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Concrete Iterator implementation for an array
class ArrayIterator<T> implements Iterator<T> {
  private array: T[];
  private index: number;

  constructor(array: T[]) {
    this.array = array;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.array.length;
  }

  next(): T {
    if (this.hasNext()) {
      const item = this.array[this.index];
      this.index++;
      return item;
    } else {
      throw new Error('No more elements in the array');
    }
  }
}

// Define the Iterable interface
interface Iterable<T> {
  createIterator(): Iterator<T>;
}

// Concrete Iterable implementation for a collection of books
class BookCollection implements Iterable<string> {
  private books: string[];

  constructor() {
    this.books = [];
  }

  addBook(book: string): void {
    this.books.push(book);
  }

  createIterator(): Iterator<string> {
    return new ArrayIterator(this.books);
  }
}

// Client code
function main() {
  // Create a collection of books
  const bookCollection = new BookCollection();
  bookCollection.addBook('Book 1');
  bookCollection.addBook('Book 2');
  bookCollection.addBook('Book 3');

  // Iterate over the collection using the iterator
  const iterator = bookCollection.createIterator();
  while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`Book: ${book}`);
  }
}

/**
 * This code demonstrates how the Command pattern can be used in a remote control system
 * to control a light. The Command interface defines the contract for executing commands,
 * and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate the actions
 * to be performed on the Light receiver object. The RemoteControl acts as the invoker,
 * which holds and triggers the commands. Pressing buttons on the remote control executes
 * the corresponding commands, resulting in the light being turned on and off.
 */
