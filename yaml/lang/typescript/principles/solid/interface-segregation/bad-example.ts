interface Machine {
  printDocument(): void;
  faxDocument(): void;
  scanDocument(): void;
}

class OldPrinter implements Machine {
  printDocument(): void {
    console.log("Printing document...");
  }

  faxDocument(): void {
    throw new Error("This printer cannot fax documents.");
  }

  scanDocument(): void {
    throw new Error("This printer cannot scan documents.");
  }
}
