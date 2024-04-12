using System;

interface IPrinter {
    void PrintDocument();
}

interface IFax {
    void FaxDocument();
}

interface IScanner {
    void ScanDocument();
}

public class SimplePrinter : IPrinter {
    // Implements printing functionality only
    public void PrintDocument() {
        Console.WriteLine("Printing document...");
    }
}

public class MultifunctionalPrinter : IPrinter, IFax, IScanner {
    // Implements all functionalities: printing, faxing, and scanning
    public void PrintDocument() {
        Console.WriteLine("Printing document...");
    }

    public void FaxDocument() {
        Console.WriteLine("Faxing document...");
    }

    public void ScanDocument() {
        Console.WriteLine("Scanning document...");
    }
}