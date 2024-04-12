public class TaxCalculator
{
    // A method to add tax for any item type
    // The tax rate is the same for all item types in this example
    public static decimal AddTax(decimal price)
    {
        const decimal taxRate = 0.05m; // Tax rate of 5%
        return price + (price * taxRate);
    }
}