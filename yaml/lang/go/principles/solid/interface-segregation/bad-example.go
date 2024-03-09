package main

import "fmt"

// Machine interface that includes too many operations
type Machine interface {
	PrintDocument()
	FaxDocument()
	ScanDocument()
}

// OldPrinter struct which does not support faxing or scanning
type OldPrinter struct{}

// PrintDocument method for OldPrinter
func (p OldPrinter) PrintDocument() {
	fmt.Println("Printing document...")
}

// FaxDocument method for OldPrinter, which it can't perform
func (p OldPrinter) FaxDocument() {
	panic("This printer cannot fax documents.")
}

// ScanDocument method for OldPrinter, which it can't perform
func (p OldPrinter) ScanDocument() {
	panic("This printer cannot scan documents.")
}

// To adhere to the Interface Segregation Principle, we refactor our interfaces

// Printer interface for devices that can print
type Printer interface {
	PrintDocument()
}

// Scanner interface for devices that can scan
type Scanner interface {
	ScanDocument()
}

// FaxMachine interface for devices that can fax
type FaxMachine interface {
	FaxDocument()
}

// BetterOldPrinter struct implementing only the Printer interface
type BetterOldPrinter struct{}

// PrintDocument method for BetterOldPrinter
func (p BetterOldPrinter) PrintDocument() {
	fmt.Println("Printing document...")
}

func main() {
	// Demonstrating using the OldPrinter
	op := OldPrinter{}
	op.PrintDocument()
	// op.FaxDocument() // This will panic
	// op.ScanDocument() // This will panic

	// Demonstrating using the BetterOldPrinter
	bop := BetterOldPrinter{}
	bop.PrintDocument()
}