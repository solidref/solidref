using System;

namespace InterfaceSegregationPrinciple
{
    // Prefer separating interfaces over one general-purpose interface
    public interface IPrinter
    {
        void PrintDocument();
    }

    public interface IFax
    {
        void FaxDocument();
    }

    public interface IScanner
    {
        void ScanDocument();
    }

    // OldPrinter only supports printing, not faxing or scanning
    public class OldPrinter : IPrinter
    {
        public void PrintDocument()
        {
            Console.WriteLine("Printing document...");
        }
    }
}