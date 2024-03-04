#include <iostream>
#include <stdexcept> // For std::runtime_error

// Abstract class representing a machine that can print, fax, and scan documents
class Machine {
public:
  virtual void printDocument() = 0;
  virtual void faxDocument() = 0;
  virtual void scanDocument() = 0;
  virtual ~Machine() {}
};

// OldPrinter only supports printing, but it's forced to implement faxing and
// scanning
class OldPrinter : public Machine {
public:
  void printDocument() override {
    std::cout << "Printing document..." << std::endl;
  }

  void faxDocument() override {
    throw std::runtime_error("This printer cannot fax documents.");
  }

  void scanDocument() override {
    throw std::runtime_error("This printer cannot scan documents.");
  }
};

// Example usage
int main() {
  OldPrinter oldPrinter;
  oldPrinter.printDocument();

  try {
    oldPrinter.faxDocument();
  } catch (const std::runtime_error &e) {
    std::cerr << "Error: " << e.what() << std::endl;
  }

  try {
    oldPrinter.scanDocument();
  } catch (const std::runtime_error &e) {
    std::cerr << "Error: " << e.what() << std::endl;
  }

  return 0;
}
