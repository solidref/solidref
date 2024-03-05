// Concrete strategy for processing payments via credit card
class CreditCardPaymentStrategy {
  constructor(cardNumber, expiryDate, cvv) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  pay(amount) {
    console.log(`Processing credit card payment of $${amount} with card number ${this.cardNumber}`);
    // Logic to process payment via credit card
  }
}

// Concrete strategy for processing payments via PayPal
class PayPalPaymentStrategy {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  pay(amount) {
    console.log(`Processing PayPal payment of $${amount} with email ${this.email}`);
    // Logic to process payment via PayPal
  }
}

// Context class representing the payment processor
class PaymentProcessor {
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(amount) {
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

main();

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
