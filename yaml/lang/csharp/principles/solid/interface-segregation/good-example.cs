using System;

interface IPrinter
{
    void PrintDocument();
}

interface IFax
{
    void FaxDocument();
}

interface IScanner
{
    void ScanDocument();
}

class SimplePrinter : IPrinter
{
    public void PrintDocument()
    {
        // Prints the document
        Console.WriteLine("Printing document...");
    }
}

class MultifunctionalPrinter : IPrinter, IFax, IScanner
{
    public void PrintDocument()
    {
        // Prints the document
        Console.WriteLine("Printing document...");
    }

    public void FaxDocument()
    {
        // Faxes the document
        Console.WriteLine("Faxing document...");
    }

    public void ScanDocument()
    {
        // Scans the document
        Console.WriteLine("Scanning document...");
    }
}