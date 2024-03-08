```php
<?php

// Interface defining the common behavior for all payment strategies
interface PaymentStrategy {
    public function pay($amount);
}

// Concrete strategy for processing payments via credit card
class CreditCardPaymentStrategy implements PaymentStrategy {
    private $cardNumber;
    private $expiryDate;
    private $cvv;

    public function __construct($cardNumber, $expiryDate, $cvv) {
        $this->cardNumber = $cardNumber;
        $this->expiryDate = $expiryDate;
        $this->cvv = $cvv;
    }

    public function pay($amount) {
        echo "Processing credit card payment of \$$amount with card number {$this->cardNumber}\n";
        // Logic to process payment via credit card
    }
}

// Concrete strategy for processing payments via PayPal
class PayPalPaymentStrategy implements PaymentStrategy {
    private $email;
    private $password;

    public function __construct($email, $password) {
        $this->email = $email;
        $this->password = $password;
    }

    public function pay($amount) {
        echo "Processing PayPal payment of \$$amount with email {$this->email}\n";
        // Logic to process payment via PayPal
    }
}

// Context class representing the payment processor
class PaymentProcessor {
    private $paymentStrategy;

    // Setter method to set the payment strategy dynamically
    public function setPaymentStrategy(PaymentStrategy $paymentStrategy) {
        $this->paymentStrategy = $paymentStrategy;
    }

    // Method to process payment using the selected strategy
    public function processPayment($amount) {
        if ($this->paymentStrategy) {
            $this->paymentStrategy->pay($amount);
        } else {
            echo "Payment strategy not set. Please select a payment method.\n";
        }
    }
}

// Client code
function main() {
    $paymentProcessor = new PaymentProcessor();

    // Select a payment method (strategy) dynamically
    $creditCardStrategy = new CreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123");
    $paymentProcessor->setPaymentStrategy($creditCardStrategy);
    $paymentProcessor->processPayment(100);

    // Change payment method (strategy)
    $payPalStrategy = new PayPalPaymentStrategy("example@example.com", "password");
    $paymentProcessor->setPaymentStrategy($payPalStrategy);
    $paymentProcessor->processPayment(50);
}

main();
```