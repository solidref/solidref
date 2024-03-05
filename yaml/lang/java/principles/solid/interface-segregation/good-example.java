interface Printer {
  void printDocument();
}

interface Fax {
  void faxDocument();
}

interface Scanner {
  void scanDocument();
}

class SimplePrinter implements Printer {
  @Override
  public void printDocument() {
    System.out.println("Printing document...");
  }
}

class MultifunctionalPrinter implements Printer, Fax, Scanner {
  @Override
  public void printDocument() {
    System.out.println("Printing document...");
  }

  @Override
  public void faxDocument() {
    System.out.println("Faxing document...");
  }

  @Override
  public void scanDocument() {
    System.out.println("Scanning document...");
  }
}
