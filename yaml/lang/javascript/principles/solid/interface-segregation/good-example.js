// Simulating the Printer interface functionality
class SimplePrinter {
  printDocument() {
    console.log("Printing document...");
  }
}

// Simulating the MultifunctionalPrinter that implements Printer, Fax, and Scanner functionalities
class MultifunctionalPrinter {
  printDocument() {
    console.log("Printing document...");
  }

  faxDocument() {
    console.log("Faxing document...");
  }

  scanDocument() {
    console.log("Scanning document...");
  }
}

// Usage examples:

const simplePrinter = new SimplePrinter();
simplePrinter.printDocument(); // "Printing document..."

const multifunctionalPrinter = new MultifunctionalPrinter();
multifunctionalPrinter.printDocument(); // "Printing document..."
multifunctionalPrinter.faxDocument(); // "Faxing document..."
multifunctionalPrinter.scanDocument(); // "Scanning document..."
