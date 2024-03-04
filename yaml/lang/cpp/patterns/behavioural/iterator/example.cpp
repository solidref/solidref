#include <iostream>
#include <stdexcept> // For std::runtime_error
#include <vector>

// Define the Iterator interface
template <typename T> class Iterator {
public:
  virtual bool hasNext() = 0;
  virtual T next() = 0;
  virtual ~Iterator() {}
};

// Concrete Iterator implementation for a vector
template <typename T> class VectorIterator : public Iterator<T> {
private:
  std::vector<T> array;
  size_t index;

public:
  VectorIterator(const std::vector<T> &array) : array(array), index(0) {}

  bool hasNext() override { return index < array.size(); }

  T next() override {
    if (this->hasNext()) {
      return array.at(index++); // Use at() for bounds checking
    } else {
      throw std::runtime_error("No more elements in the vector");
    }
  }
};

// Define the Iterable interface
template <typename T> class Iterable {
public:
  virtual Iterator<T> *createIterator() = 0;
  virtual ~Iterable() {}
};

// Concrete Iterable implementation for a collection of books
class BookCollection : public Iterable<std::string> {
private:
  std::vector<std::string> books;

public:
  void addBook(const std::string &book) { books.push_back(book); }

  Iterator<std::string> *createIterator() override {
    return new VectorIterator<std::string>(books);
  }
};

// Example usage
int main() {
  // Create a collection of books
  BookCollection bookCollection;
  bookCollection.addBook("Book 1");
  bookCollection.addBook("Book 2");
  bookCollection.addBook("Book 3");

  // Iterate over the collection using the iterator
  Iterator<std::string> *iterator = bookCollection.createIterator();
  while (iterator->hasNext()) {
    std::string book = iterator->next();
    std::cout << "Book: " << book << std::endl;
  }

  delete iterator; // Clean up the dynamically allocated iterator

  return 0;
}

/**
 * In this example, the Iterator pattern is used to iterate over a collection of
 * books stored in a BookCollection. The Iterator interface defines methods for
 * checking if there are more elements (hasNext) and retrieving the next element
 * (next). The ArrayIterator class provides a concrete implementation of the
 * iterator for an array of books. The BookCollection class implements the
 * Iterable interface, which allows it to create iterators for iterating over
 * its collection of books. Finally, in the client code, we create a
 * BookCollection, add books to it, and iterate over the collection using the
 * iterator, printing each book's name.
 */
