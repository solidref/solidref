#include <iostream>
#include <memory>
#include <string>
#include <vector>

// Product Interface and Concrete Products

class Document {
public:
  virtual void open() const = 0;
  virtual void save() const = 0;
  virtual void close() const = 0;
  virtual ~Document() {}
};

class TextDocument : public Document {
public:
  void open() const override {
    std::cout << "Opening a text document..." << std::endl;
  }

  void save() const override {
    std::cout << "Saving the text document..." << std::endl;
  }

  void close() const override {
    std::cout << "Closing the text document..." << std::endl;
  }
};

class SpreadsheetDocument : public Document {
public:
  void open() const override {
    std::cout << "Opening a spreadsheet document..." << std::endl;
  }

  void save() const override {
    std::cout << "Saving the spreadsheet document..." << std::endl;
  }

  void close() const override {
    std::cout << "Closing the spreadsheet document..." << std::endl;
  }
};

// Creator Interface and Concrete Creators

class DocumentCreator {
public:
  virtual std::unique_ptr<Document> createDocument() const = 0;
  virtual ~DocumentCreator() {}
};

class TextDocumentCreator : public DocumentCreator {
public:
  std::unique_ptr<Document> createDocument() const override {
    return std::make_unique<TextDocument>();
  }
};

class SpreadsheetDocumentCreator : public DocumentCreator {
public:
  std::unique_ptr<Document> createDocument() const override {
    return std::make_unique<SpreadsheetDocument>();
  }
};

// Client Code The client code uses the creator to instantiate documents without
// knowing the concrete class of the documents it gets.

void openDocument(const DocumentCreator &creator) {
  auto doc = creator.createDocument();
  doc->open();
  // Perform operations...
  doc->save();
  doc->close();
}

int main() {
  TextDocumentCreator textCreator;
  SpreadsheetDocumentCreator spreadsheetCreator;

  std::cout << "Creating Text Document:" << std::endl;
  openDocument(textCreator);

  std::cout << "\nCreating Spreadsheet Document:" << std::endl;
  openDocument(spreadsheetCreator);

  return 0;
}

// Polymorphic Product Creation: The DocumentCreator provides a factory method
// createDocument that subclasses implement to instantiate product objects
// polymorphically.

// Encapsulation and Scalability: Each concrete creator (TextDocumentCreator,
// SpreadsheetDocumentCreator) encapsulates the creation of a specific product
// type. Adding new document types is easy and doesn't require changes to the
// client code or the abstract creator.

// Use of Smart Pointers: The example uses std::unique_ptr for memory
// management, ensuring resources are properly cleaned up without manual
// deletion, thus leveraging modern C++ memory management techniques.

// This refined example demonstrates the Factory Method Design Pattern's utility
// in creating a flexible and scalable system that can easily be extended with
// new types of products while keeping the creation logic encapsulated and
// separated from the client code.
