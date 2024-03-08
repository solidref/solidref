using System;

// Interface defining the common behavior for all payment strategies
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

// Concrete strategy for processing payments via credit card
public class CreditCardPaymentStrategy : IPaymentStrategy
{
    private readonly string _cardNumber;
    private readonly string _expiryDate;
    private readonly string _cvv;

    public CreditCardPaymentStrategy(string cardNumber, string expiryDate, string cvv)
    {
        _cardNumber = cardNumber;
        _expiryDate = expiryDate;
        _cvv = cvv;
    }

    public void Pay(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of ${amount} with card number {_cardNumber}");
        // Logic to process payment via credit card
    }
}

// Concrete strategy for processing payments via PayPal
public class PayPalPaymentStrategy : IPaymentStrategy
{
    private readonly string _email;
    private readonly string _password;

    public PayPalPaymentStrategy(string email, string password)
    {
        _email = email;
        _password = password;
    }

    public void Pay(decimal amount)
    {
        Console.WriteLine($"Processing PayPal payment of ${amount} with email {_email}");
        // Logic to process payment via PayPal
    }
}

// Context class representing the payment processor
public class PaymentProcessor
{
    private IPaymentStrategy _paymentStrategy;

    // Setter method to set the payment strategy dynamically
    public void SetPaymentStrategy(IPaymentStrategy paymentStrategy)
    {
        _paymentStrategy = paymentStrategy;
    }

    // Method to process payment using the selected strategy
    public void ProcessPayment(decimal amount)
    {
        if (_paymentStrategy != null)
        {
            _paymentStrategy.Pay(amount);
        }
        else
        {
            Console.WriteLine("Payment strategy not set. Please select a payment method.");
        }
    }
}

public class Program
{
    public static void Main()
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