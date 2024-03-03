#include <iostream>
#include <string>

// Abstract Base Class with Template Method

class DocumentParser {
public:
  // Template method
  void parseDocument(const std::string &content) {
    preprocess(content);
    extractData(content);
    postprocess(content);
  }

  virtual ~DocumentParser() {}

protected:
  virtual void preprocess(const std::string &content) {
    std::cout << "Preprocessing content: " << content << std::endl;
  }

  virtual void extractData(const std::string &content) = 0; // Abstract method

  virtual void postprocess(const std::string &content) {
    std::cout << "Postprocessing content: " << content << std::endl;
  }
};

// Concrete Subclasses Implementing Specific Parsing Logic

class XMLParser : public DocumentParser {
protected:
  void extractData(const std::string &content) override {
    std::cout << "Extracting data from XML: " << content << std::endl;
  }
};

class JSONParser : public DocumentParser {
protected:
  void extractData(const std::string &content) override {
    std::cout << "Extracting data from JSON: " << content << std::endl;
  }
};

class CSVParser : public DocumentParser {
protected:
  void preprocess(const std::string &content) override {
    std::cout << "Custom preprocessing for CSV: " << content << std::endl;
  }

  void extractData(const std::string &content) override {
    std::cout << "Extracting data from CSV: " << content << std::endl;
  }

  void postprocess(const std::string &content) override {
    std::cout << "Custom postprocessing for CSV: " << content << std::endl;
  }
};

int main() {
  XMLParser xmlParser;
  JSONParser jsonParser;
  CSVParser csvParser;

  std::cout << "Parsing XML document:" << std::endl;
  xmlParser.parseDocument("<xml>Some data</xml>");

  std::cout << "\nParsing JSON document:" << std::endl;
  jsonParser.parseDocument("{ \"key\": \"value\" }");

  std::cout << "\nParsing CSV document:" << std::endl;
  csvParser.parseDocument("name,age\nJohn Doe,30");

  return 0;
}

// Algorithm Skeleton: The DocumentParser base class outlines the algorithm's
// skeleton with the parseDocument method, providing default implementations for
// optional steps (preprocess and postprocess) and requiring concrete subclasses
// to implement the essential step (extractData).

// Polymorphism and Flexibility: Concrete classes (XMLParser, JSONParser,
// CSVParser) inherit from DocumentParser and provide specific implementations
// for parsing different document formats. This demonstrates the pattern's
// flexibility in accommodating various algorithms under a unified interface.

// Customization of Steps: The CSVParser class overrides all steps to provide
// custom behavior, showcasing the pattern's ability to adapt the algorithm's
// skeleton to specific needs without altering its overall structure.

// This example demonstrates a sophisticated use of the Template Method Design
// Pattern in C++, effectively separating the invariant parts of an algorithm
// from the variant parts, thus promoting code reuse and flexibility in
// extending the system with new document formats.
