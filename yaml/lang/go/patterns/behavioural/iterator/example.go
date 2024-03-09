package main

import "fmt"

type Iterator[T any] struct {
	collection []T
	index      int
}

func NewIterator[T any](collection []T) *Iterator[T] {
	return &Iterator[T]{collection: collection, index: 0}
}

// Next returns the next element in the collection and advances the index
func (it *Iterator[T]) Next() (T, bool) {
	if it.index < len(it.collection) {
		value := it.collection[it.index]
		it.index++
		return value, true
	}
	var zeroValue T // Represents the zero value of T
	return zeroValue, false
}

// HasNext checks if the collection has more elements
func (it *Iterator[T]) HasNext() bool {
	return it.index < len(it.collection)
}

// Client code
func main() {
	items := []interface{}{1, "two", 3, "four", 5}
	iterator := NewIterator(items)

	for iterator.HasNext() {
		item, _ := iterator.Next()
		fmt.Println(item)
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
}