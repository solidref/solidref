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
