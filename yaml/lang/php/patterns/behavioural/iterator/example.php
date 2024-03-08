<?php

class IteratorClass {
    private $collection;
    private $index;

    public function __construct($collection) {
        $this->collection = $collection;
        $this->index = 0;
    }

    public function next() {
        if ($this->hasNext()) {
            return $this->collection[$this->index++];
        } else {
            return null;
        }
    }

    public function hasNext() {
        return $this->index < count($this->collection);
    }
}

// Client code
$items = [1, 'two', 3, 'four', 5];
$iterator = new IteratorClass($items);

while ($iterator->hasNext()) {
    echo $iterator->next() . PHP_EOL;
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