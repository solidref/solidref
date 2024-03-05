public class TaxCalculator {
    public static double addTax(double price) {
        return addTax(price, 0.05); // Default tax rate
    }

    public static double addTax(double price, double rate) {
        return price + (price * rate);
    }
}
