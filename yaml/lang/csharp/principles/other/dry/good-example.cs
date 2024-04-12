public class TaxCalculator
{
    // Using method with optional parameter for repeated logic
    public static double AddTax(double price, double rate = 0.05)
    {
        return price + (price * rate);
    }
}