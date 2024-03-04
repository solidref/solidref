#include <iostream>
#include <iterator> // For std::begin(), std::end()
#include <string>
#include <vector>

// Custom container for a collection of books
class BookCollection {
private:
  std::vector<std::string> books;

public:
  // Adds a book to the collection
  void addBook(const std::string &book) { books.push_back(book); }

  // Returns the beginning iterator of the collection
  auto begin() const -> decltype(books.begin()) { return books.begin(); }

  // Returns the end iterator of the collection
  auto end() const -> decltype(books.end()) { return books.end(); }
};

// Example usage
int main() {
  BookCollection bookCollection;

  // Add books to the collection
  bookCollection.addBook("C++ Primer");
  bookCollection.addBook("Effective Modern C++");
  bookCollection.addBook("The C++ Programming Language");

  // Iterate over the collection using a range-based for loop
  for (const auto &book : bookCollection) {
    std::cout << "Book: " << book << std::endl;
  }

  return 0;
}

/**
 * Custom Container (BookCollection): A simple class that encapsulates a
 * std::vector<std::string> to store a collection of books. It provides addBook
 * method to add books to the collection.
 *
 * Native Iteration Support: Instead of manually defining an iterator interface
 * and concrete iterator classes, this example leverages the iterators provided
 * by the std::vector container. The begin() and end() methods return iterators
 * to the start and end of the books vector, respectively.
 *
 * Range-based For Loop: The example utilizes a range-based for loop for
 * iteration, a feature introduced in C++11 that allows iterating over any
 * container that provides begin() and end() methods returning iterators. This
 * feature significantly simplifies code compared to manually managing iterator
 * objects.
 */
