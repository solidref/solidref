#include <stdio.h>
#include <stdlib.h>

// The machine interface with all functions, but in C, we will use function pointers.
typedef struct Machine {
  void (*printDocument)(void);
  void (*faxDocument)(void);
  void (*scanDocument)(void);
} Machine;

// Functions for the OldPrinter
void printDocument_OldPrinter() {
  printf("Printing document...\n");
}

// Instead of throwing errors for unsupported operations, we'll print error messages. 
// This is a common pattern in C for handling unsupported operations.
void faxDocument_OldPrinter() {
  printf("This printer cannot fax documents.\n");
}

void scanDocument_OldPrinter() {
  printf("This printer cannot scan documents.\n");
}

// Function to initialize an OldPrinter
void initOldPrinter(Machine *printer) {
  printer->printDocument = printDocument_OldPrinter;
  printer->faxDocument = faxDocument_OldPrinter;
  printer->scanDocument = scanDocument_OldPrinter;
}

int main() {
  // Create an OldPrinter
  Machine oldPrinter;
  initOldPrinter(&oldPrinter);

  // Use the OldPrinter
  oldPrinter.printDocument();
  oldPrinter.faxDocument();
  oldPrinter.scanDocument();

  return 0;
}