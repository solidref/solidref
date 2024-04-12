using System;

public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPaymentStrategy : IPaymentStrategy
{
    private string CardNumber { get; }
    private string ExpiryDate { get; }
    private string Cvv { get; }

    public CreditCardPaymentStrategy(string cardNumber, string expiryDate, string cvv)
    {
        CardNumber = cardNumber;
        ExpiryDate = expiryDate;
        Cvv = cvv;
    }

    public void Pay(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of ${amount} with card number {CardNumber}");
        // Logic to process payment via credit card
    }
}

public class PayPalPaymentStrategy : IPaymentStrategy
{
    private string Email { get; }
    private string Password { get; }

    public PayPalPaymentStrategy(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public void Pay(decimal amount)
    {
        Console.WriteLine($"Processing PayPal payment of ${amount} with email {Email}");
        // Logic to process payment via PayPal
    }
}

public class PaymentProcessor
{
    private IPaymentStrategy PaymentStrategy;

    public void SetPaymentStrategy(IPaymentStrategy paymentStrategy)
    {
        PaymentStrategy = paymentStrategy;
    }

    public void ProcessPayment(decimal amount)
    {
        PaymentStrategy?.Pay(amount);
    }
}

class Program
{
    static void Main(string[] args)
    {
        var paymentProcessor = new PaymentProcessor();

        // Select a payment method (strategy) dynamically
        var creditCardStrategy = new CreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123");
        paymentProcessor.SetPaymentStrategy(creditCardStrategy);
        paymentProcessor.ProcessPayment(100);

        // Change payment method (strategy)
        var payPalStrategy = new PayPalPaymentStrategy("example@example.com", "password");
        paymentProcessor.SetPaymentStrategy(payPalStrategy);
        paymentProcessor.ProcessPayment(50);
    }
}