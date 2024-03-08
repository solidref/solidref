using System;
using System.Collections.Generic;

public class Iterator<T>
{
    private List<T> collection;
    private int index;

    public Iterator(List<T> collection)
    {
        this.collection = collection;
        this.index = 0;
    }

    public T Next()
    {
        return this.collection[this.index++];
    }

    public bool HasNext()
    {
        return this.index < this.collection.Count;
    }
}

class Program
{
    static void Main(string[] args)
    {
        List<object> items = new List<object> { 1, "two", 3, "four", 5 };
        Iterator<object> iterator = new Iterator<object>(items);

        while (iterator.HasNext())
        {
            Console.WriteLine(iterator.Next());
        }

        /*
         * In this example, the Iterator pattern is used to iterate over a collection of books
         * stored in a BookCollection. The Iterator interface defines methods for checking if
         * there are more elements (HasNext) and retrieving the next element (Next). The
         * ArrayIterator class provides a concrete implementation of the iterator for an array
         * of books. The BookCollection class implements the Iterable interface, which allows
         * it to create iterators for iterating over its collection of books. Finally, in the
         * client code, we create a BookCollection, add books to it, and iterate over the
         * collection using the iterator, printing each book's name.
         */
    }
}