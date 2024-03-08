using System;

class Program
{
    // Using optional parameters for repeated logic
    static double AddTax(double price, double rate = 0.05)
    {
        return price + (price * rate);
    }

    static void Main(string[] args)
    {
        Console.WriteLine(AddTax(100)); // Using default tax rate
        Console.WriteLine(AddTax(100, 0.1)); // Using custom tax rate
    }
}