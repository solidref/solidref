interface Printer {
  printDocument(): void;
}

interface Fax {
  faxDocument(): void;
}

interface Scanner {
  scanDocument(): void;
}

class SimplePrinter implements Printer {
  printDocument(): void {
    console.log("Printing document...");
  }
}

class MultifunctionalPrinter implements Printer, Fax, Scanner {
  printDocument(): void {
    console.log("Printing document...");
  }

  faxDocument(): void {
    console.log("Faxing document...");
  }

  scanDocument(): void {
    console.log("Scanning document...");
  }
}
