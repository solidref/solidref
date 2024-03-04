// Interface defining the common behavior for all payment strategies
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategy for processing payments via credit card
class CreditCardPaymentStrategy implements PaymentStrategy {
  constructor(private cardNumber: string, private expiryDate: string, private cvv: string) { }

  pay(amount: number): void {
    console.log(`Processing credit card payment of $${amount} with card number ${this.cardNumber}`);
    // Logic to process payment via credit card
  }
}

// Concrete strategy for processing payments via PayPal
class PayPalPaymentStrategy implements PaymentStrategy {
  constructor(private email: string, private password: string) { }

  pay(amount: number): void {
    console.log(`Processing PayPal payment of $${amount} with email ${this.email}`);
    // Logic to process payment via PayPal
  }
}

// Context class representing the payment processor
class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  // Setter method to set the payment strategy dynamically
  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  // Method to process payment using the selected strategy
  processPayment(amount: number): void {
    if (this.paymentStrategy) {
      this.paymentStrategy.pay(amount);
    } else {
      console.log("Payment strategy not set. Please select a payment method.");
    }
  }
}

// Client code
function main() {
  const paymentProcessor = new PaymentProcessor();

  // Select a payment method (strategy) dynamically
  const creditCardStrategy = new CreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123");
  paymentProcessor.setPaymentStrategy(creditCardStrategy);
  paymentProcessor.processPayment(100);

  // Change payment method (strategy)
  const payPalStrategy = new PayPalPaymentStrategy("example@example.com", "password");
  paymentProcessor.setPaymentStrategy(payPalStrategy);
  paymentProcessor.processPayment(50);
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
