using System;

class Program
{
    // Method to add tax
    static double AddTax(double price, double taxRate)
    {
        return price + (price * taxRate);
    }

    static void Main()
    {
        double foodPrice = 100.0;
        double electronicsPrice = 200.0;
        double taxRate = 0.05; // 5% Tax rate for both food and electronics
        
        // Applying tax for food
        double foodPriceWithTax = AddTax(foodPrice, taxRate);
        Console.WriteLine($"Food price with tax: {foodPriceWithTax}");

        // Applying tax for electronics
        double electronicsPriceWithTax = AddTax(electronicsPrice, taxRate);
        Console.WriteLine($"Electronics price with tax: {electronicsPriceWithTax}");
    }
}