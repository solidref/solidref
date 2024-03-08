using System;

// Defining the basic functions that a machine can perform
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

// Implementing only the relevant function for an Old Printer
class OldPrinter : IPrinter
{
    public void PrintDocument()
    {
        Console.WriteLine("Printing document...");
    }
}