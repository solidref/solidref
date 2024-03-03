class Iterator<T> {
  private collection: T[];
  private index: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.index = 0;
  }

  next(): T | undefined {
    return this.collection[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

// Client code
const items = [1, 'two', 3, 'four', 5];
const iterator = new Iterator(items);

while (iterator.hasNext()) {
  console.log(iterator.next());
}

/**
 * In this example, the Iterator pattern is used to iterate over a collection of books
 * stored in a BookCollection. The Iterator interface defines methods for checking if
 * there are more elements (hasNext) and retrieving the next element (next). The
 * ArrayIterator class provides a concrete implementation of the iterator for an array
 * of books. The BookCollection class implements the Iterable interface, which allows
 * it to create iterators for iterating over its collection of books. Finally, in the
 * client code, we create a BookCollection, add books to it, and iterate over the
 * collection using the iterator, printing each book's name.
 */
