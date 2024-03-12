#include <stdio.h>

/* Define Printer actions */
typedef struct PrinterActions {
    void (*printDocument)(void);
} PrinterActions;

/* Define Fax actions */
typedef struct FaxActions {
    void (*faxDocument)(void);
} FaxActions;

/* Define Scanner actions */
typedef struct ScannerActions {
    void (*scanDocument)(void);
} ScannerActions;

/* SimplePrinter functions */
void SimplePrinter_printDocument() {
    printf("Printing document...\n");
}

/* MultifunctionalPrinter functions */
void MultifunctionalPrinter_printDocument() {
    printf("Printing document...\n");
}

void MultifunctionalPrinter_faxDocument() {
    printf("Faxing document...\n");
}

void MultifunctionalPrinter_scanDocument() {
    printf("Scanning document...\n");
}

/* Structs representing the devices */
typedef struct {
    PrinterActions actions;
} SimplePrinter;

typedef struct {
    PrinterActions printerActions;
    FaxActions faxActions;
    ScannerActions scannerActions;
} MultifunctionalPrinter;

/* Function to initialize a SimplePrinter */
void SimplePrinter_init(SimplePrinter *printer) {
    printer->actions.printDocument = SimplePrinter_printDocument;
}

/* Function to initialize a MultifunctionalPrinter */
void MultifunctionalPrinter_init(MultifunctionalPrinter *printer) {
    printer->printerActions.printDocument = MultifunctionalPrinter_printDocument;
    printer->faxActions.faxDocument = MultifunctionalPrinter_faxDocument;
    printer->scannerActions.scanDocument = MultifunctionalPrinter_scanDocument;
}

int main() {
    SimplePrinter mySimplePrinter;
    SimplePrinter_init(&mySimplePrinter);
    mySimplePrinter.actions.printDocument();

    MultifunctionalPrinter myMultifunctionalPrinter;
    MultifunctionalPrinter_init(&myMultifunctionalPrinter);
    myMultifunctionalPrinter.printerActions.printDocument();
    myMultifunctionalPrinter.faxActions.faxDocument();
    myMultifunctionalPrinter.scannerActions.scanDocument();

    return 0;
}