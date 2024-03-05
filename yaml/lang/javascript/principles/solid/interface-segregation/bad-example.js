// Instead of a single Machine interface, we conceptually segregate the functionalities.

class Printer {
  printDocument() {
    console.log("Printing document...");
  }
}

// Assuming we need to demonstrate the use of faxing and scanning capabilities
// without forcing them onto a class that doesn't support them:

class FaxMachine {
  faxDocument() {
    console.log("Faxing document...");
  }
}

class Scanner {
  scanDocument() {
    console.log("Scanning document...");
  }
}

// OldPrinter now only has methods relevant to its capabilities
class OldPrinter extends Printer {
  // It only needs to override or implement methods for its actual functionality,
  // in this case, printDocument, which is already provided by the Printer class.
  // Thus, OldPrinter does not need to implement faxDocument or scanDocument.
}

// Usage
const oldPrinter = new OldPrinter();
oldPrinter.printDocument(); // "Printing document..."

// Separate classes for each functionality demonstrate ISP
const faxMachine = new FaxMachine();
faxMachine.faxDocument(); // "Faxing document..."

const scanner = new Scanner();
scanner.scanDocument(); // "Scanning document..."
