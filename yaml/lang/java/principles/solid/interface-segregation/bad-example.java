interface Machine {
  void printDocument();
  void faxDocument();
  void scanDocument();
}

class OldPrinter implements Machine {
  @Override
  public void printDocument() {
    System.out.println("Printing document...");
  }

  @Override
  public void faxDocument() {
    throw new UnsupportedOperationException("This printer cannot fax documents.");
  }

  @Override
  public void scanDocument() {
    throw new UnsupportedOperationException("This printer cannot scan documents.");
  }
}
