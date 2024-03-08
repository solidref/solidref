<?php

interface Printer {
  public function printDocument();
}

interface Fax {
  public function faxDocument();
}

interface Scanner {
  public function scanDocument();
}

class SimplePrinter implements Printer {
  public function printDocument() {
    // Printing document...
    echo "Printing document...";
  }
}

class MultifunctionalPrinter implements Printer, Fax, Scanner {
  public function printDocument() {
    // Printing document...
    echo "Printing document...";
  }

  public function faxDocument() {
    // Faxing document...
    echo "Faxing document...";
  }

  public function scanDocument() {
    // Scanning document...
    echo "Scanning document...";
  }
}