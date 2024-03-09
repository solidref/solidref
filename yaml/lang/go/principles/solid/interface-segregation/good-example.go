package main

import "fmt"

// Printer interface
type Printer interface {
    PrintDocument()
}

// Fax interface
type Fax interface {
    FaxDocument()
}

// Scanner interface
type Scanner interface {
    ScanDocument()
}

// SimplePrinter struct implements Printer
type SimplePrinter struct{}

func (p SimplePrinter) PrintDocument() {
    fmt.Println("Printing document...")
}

// MultifunctionalPrinter struct implements Printer, Fax, and Scanner
type MultifunctionalPrinter struct{}

func (m MultifunctionalPrinter) PrintDocument() {
    fmt.Println("Printing document...")
}

func (m MultifunctionalPrinter) FaxDocument() {
    fmt.Println("Faxing document...")
}

func (m MultifunctionalPrinter) ScanDocument() {
    fmt.Println("Scanning document...")
}

// Example usage
func main() {
    var printer Printer = SimplePrinter{}
    printer.PrintDocument()

    var mfp Printer = MultifunctionalPrinter{}
    mfp.PrintDocument()
    // For faxing and scanning, we need to assert the MultifunctionalPrinter type
    (mfp.(MultifunctionalPrinter)).FaxDocument()
    (mfp.(MultifunctionalPrinter)).ScanDocument()
}