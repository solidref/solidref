// PaymentStrategy.java
interface PaymentStrategy {
  void pay(int amount);
}

// CreditCardPaymentStrategy.java
class CreditCardPaymentStrategy implements PaymentStrategy {
  private String cardNumber;
  private String expiryDate;
  private String cvv;

  public CreditCardPaymentStrategy(String cardNumber, String expiryDate, String cvv) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  @Override
  public void pay(int amount) {
    System.out.println("Processing credit card payment of $" + amount + " with card number " + this.cardNumber);
    // Logic to process payment via credit card
  }
}

// PayPalPaymentStrategy.java
class PayPalPaymentStrategy implements PaymentStrategy {
  private String email;
  private String password;

  public PayPalPaymentStrategy(String email, String password) {
    this.email = email;
    this.password = password;
  }

  @Override
  public void pay(int amount) {
    System.out.println("Processing PayPal payment of $" + amount + " with email " + this.email);
    // Logic to process payment via PayPal
  }
}

// PaymentProcessor.java (Context)
class PaymentProcessor {
  private PaymentStrategy paymentStrategy;

  public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  public void processPayment(int amount) {
    if (this.paymentStrategy != null) {
      this.paymentStrategy.pay(amount);
    } else {
      System.out.println("Payment strategy not set. Please select a payment method.");
    }
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    PaymentProcessor paymentProcessor = new PaymentProcessor();

    // Select a payment method (strategy) dynamically
    PaymentStrategy creditCardStrategy = new CreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123");
    paymentProcessor.setPaymentStrategy(creditCardStrategy);
    paymentProcessor.processPayment(100);

    // Change payment method (strategy)
    PaymentStrategy payPalStrategy = new PayPalPaymentStrategy("example@example.com", "password");
    paymentProcessor.setPaymentStrategy(payPalStrategy);
    paymentProcessor.processPayment(50);
  }
}

/**
 * The PaymentStrategy interface defines the common behavior for all payment strategies. Each concrete payment
 * strategy class implements this interface and provides its own implementation of the pay method.
 *
 * Concrete strategy classes (CreditCardPaymentStrategy and PayPalPaymentStrategy) represent different payment
 * methods and define how payments are processed for each method.
 *
 * The PaymentProcessor class acts as the context and maintains a reference to the current payment strategy.
 * It provides a setter method setPaymentStrategy to dynamically set the payment strategy, and a processPayment
 * method to process payments using the selected strategy.
 *
 * In the client code, we create a PaymentProcessor object and dynamically select the payment method (strategy)
 * based on user input. We then process payments using the selected strategy.
 *
 */
