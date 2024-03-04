#include <iostream>

// Interface for printing functionality
class Printer {
public:
  virtual void printDocument() = 0;
  virtual ~Printer() {}
};

// Interface for faxing functionality
class Fax {
public:
  virtual void faxDocument() = 0;
  virtual ~Fax() {}
};

// Interface for scanning functionality
class Scanner {
public:
  virtual void scanDocument() = 0;
  virtual ~Scanner() {}
};

// Simple printer only implements the Printer interface
class SimplePrinter : public Printer {
public:
  void printDocument() override {
    std::cout << "Printing document..." << std::endl;
  }
};

// Multifunctional printer implements all interfaces
class MultifunctionalPrinter : public Printer, public Fax, public Scanner {
public:
  void printDocument() override {
    std::cout << "Printing document..." << std::endl;
  }

  void faxDocument() override {
    std::cout << "Faxing document..." << std::endl;
  }

  void scanDocument() override {
    std::cout << "Scanning document..." << std::endl;
  }
};

// Example usage
int main() {
  SimplePrinter simplePrinter;
  simplePrinter.printDocument();

  MultifunctionalPrinter multiPrinter;
  multiPrinter.printDocument();
  multiPrinter.faxDocument();
  multiPrinter.scanDocument();

  return 0;
}
