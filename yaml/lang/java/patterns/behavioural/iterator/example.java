// CustomIterator.java
public class CustomIterator<T> {
  private T[] collection;
  private int index;

  public CustomIterator(T[] collection) {
    this.collection = collection;
    this.index = 0;
  }

  public T next() {
    return collection[index++];
  }

  public boolean hasNext() {
    return index < collection.length;
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    // Using an array of Object to mix integers and strings, similar to the TypeScript example
    Object[] items = {1, "two", 3, "four", 5};
    CustomIterator<Object> iterator = new CustomIterator<>(items);

    while (iterator.hasNext()) {
      System.out.println(iterator.next());
    }
  }
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
