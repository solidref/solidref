// Strategy Interface Using std::function
// Instead of defining a traditional interface with virtual methods, we'll use
// std::function to hold any callable that matches the strategy's signature.

#include <functional>
#include <iostream>
#include <string>

// Strategy signature as std::function
using PaymentStrategy = std::function<void(const std::string &, double)>;

// Context Class
// The context class will use a PaymentStrategy to process payments. It can
// dynamically change the strategy at runtime.

class PaymentProcessor {
private:
  PaymentStrategy strategy;

public:
  // Constructor for initializing with a default strategy, if desired
  explicit PaymentProcessor(const PaymentStrategy &strategy = nullptr)
      : strategy(strategy) {}

  // Method to set the payment strategy dynamically
  void setPaymentStrategy(const PaymentStrategy &newStrategy) {
    strategy = newStrategy;
  }

  // Method to process payment using the selected strategy
  void processPayment(const std::string &account, double amount) const {
    if (strategy) {
      strategy(account, amount);
    } else {
      std::cerr << "Payment strategy not set. Please select a payment method."
                << std::endl;
    }
  }
};

// Defining Concrete Strategies
// Concrete strategies can be defined inline using lambdas, function objects, or
// regular functions, providing great flexibility.

// Example strategies
auto creditCardPayment = [](const std::string &cardNumber, double amount) {
  std::cout << "Processing credit card payment of $" << amount
            << " using card number " << cardNumber << std::endl;
};

auto paypalPayment = [](const std::string &email, double amount) {
  std::cout << "Processing PayPal payment of $" << amount << " for " << email
            << std::endl;
};

int main() {
  PaymentProcessor processor;

  // Use the credit card payment strategy
  processor.setPaymentStrategy(creditCardPayment);
  processor.processPayment("4111 1111 1111 1111", 100.0);

  // Switch to the PayPal payment strategy
  processor.setPaymentStrategy(paypalPayment);
  processor.processPayment("user@example.com", 50.0);

  // Directly setting a lambda as a strategy
  processor.setPaymentStrategy([](const std::string &account, double amount) {
    std::cout << "Processing cryptocurrency payment of $" << amount
              << " to wallet " << account << std::endl;
  });
  processor.processPayment("crypto_wallet_address", 75.0);

  return 0;
}

// Flexibility: The use of std::function for the strategy pattern allows the
// PaymentProcessor to accept any callable that matches the signature, including
// lambdas, function objects, and free functions. This flexibility greatly
// enhances the pattern's utility and expressiveness in C++.

// Ease of Use: Directly setting strategies without the need to define concrete
// strategy classes for every case simplifies code and reduces boilerplate,
// making the strategy pattern more accessible and easier to use for a variety
// of scenarios.

// Dynamic Strategy Selection: Strategies can be dynamically changed at runtime,
// allowing the system to adapt its behavior as needed based on context or user
// preferences.
