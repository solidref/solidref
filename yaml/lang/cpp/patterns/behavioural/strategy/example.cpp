// Payment Strategy Interface and Concrete Strategies

#include <iostream>
#include <memory>
#include <string>

// Abstract class defining the common behavior for all payment strategies
class PaymentStrategy {
public:
  virtual void pay(int amount) const = 0;
  virtual ~PaymentStrategy() {}
};

// Concrete strategy for processing payments via credit card
class CreditCardPaymentStrategy : public PaymentStrategy {
  std::string cardNumber;
  std::string expiryDate;
  std::string cvv;

public:
  CreditCardPaymentStrategy(const std::string &cardNumber,
                            const std::string &expiryDate,
                            const std::string &cvv)
      : cardNumber(cardNumber), expiryDate(expiryDate), cvv(cvv) {}

  void pay(int amount) const override {
    std::cout << "Processing credit card payment of $" << amount
              << " with card number " << cardNumber << std::endl;
    // Logic to process payment via credit card
  }
};

// Concrete strategy for processing payments via PayPal
class PayPalPaymentStrategy : public PaymentStrategy {
  std::string email;
  std::string password;

public:
  PayPalPaymentStrategy(const std::string &email, const std::string &password)
      : email(email), password(password) {}

  void pay(int amount) const override {
    std::cout << "Processing PayPal payment of $" << amount << " with email "
              << email << std::endl;
    // Logic to process payment via PayPal
  }
};

// Payment Processor Context Class

class PaymentProcessor {
  std::shared_ptr<PaymentStrategy> paymentStrategy;

public:
  // Setter method to set the payment strategy dynamically
  void setPaymentStrategy(const std::shared_ptr<PaymentStrategy> &strategy) {
    paymentStrategy = strategy;
  }

  // Method to process payment using the selected strategy
  void processPayment(int amount) const {
    if (paymentStrategy) {
      paymentStrategy->pay(amount);
    } else {
      std::cout << "Payment strategy not set. Please select a payment method."
                << std::endl;
    }
  }
};

int main() {
  PaymentProcessor paymentProcessor;

  // Select a payment method (strategy) dynamically
  auto creditCardStrategy = std::make_shared<CreditCardPaymentStrategy>(
      "1234 5678 9012 3456", "12/25", "123");
  paymentProcessor.setPaymentStrategy(creditCardStrategy);
  paymentProcessor.processPayment(100);

  // Change payment method (strategy)
  auto payPalStrategy = std::make_shared<PayPalPaymentStrategy>(
      "example@example.com", "password");
  paymentProcessor.setPaymentStrategy(payPalStrategy);
  paymentProcessor.processPayment(50);

  return 0;
}

/**
 * The PaymentStrategy interface defines the common behavior for all payment
 * strategies. Each concrete payment strategy class implements this interface
 * and provides its own implementation of the pay method.
 *
 * Concrete strategy classes (CreditCardPaymentStrategy and
 * PayPalPaymentStrategy) represent different payment methods and define how
 * payments are processed for each method.
 *
 * The PaymentProcessor class acts as the context and maintains a reference to
 * the current payment strategy. It provides a setter method setPaymentStrategy
 * to dynamically set the payment strategy, and a processPayment method to
 * process payments using the selected strategy.
 *
 * In the client code, we create a PaymentProcessor object and dynamically
 * select the payment method (strategy) based on user input. We then process
 * payments using the selected strategy.
 *
 */
