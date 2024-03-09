package main

import "fmt"

// PaymentStrategy defines the common behavior for all payment strategies
type PaymentStrategy interface {
  Pay(amount float64)
}

// CreditCardPaymentStrategy is a concrete strategy for processing payments via credit card
type CreditCardPaymentStrategy struct {
  CardNumber string
  ExpiryDate string
  CVV        string
}

func (c *CreditCardPaymentStrategy) Pay(amount float64) {
  fmt.Printf("Processing credit card payment of $%.2f with card number %s\n", amount, c.CardNumber)
  // Logic to process payment via credit card
}

// PayPalPaymentStrategy is a concrete strategy for processing payments via PayPal
type PayPalPaymentStrategy struct {
  Email    string
  Password string
}

func (p *PayPalPaymentStrategy) Pay(amount float64) {
  fmt.Printf("Processing PayPal payment of $%.2f with email %s\n", amount, p.Email)
  // Logic to process payment via PayPal
}

// PaymentProcessor represents the payment processor (Context)
type PaymentProcessor struct {
  PaymentStrategy PaymentStrategy
}

// SetPaymentStrategy sets the payment strategy dynamically
func (p *PaymentProcessor) SetPaymentStrategy(strategy PaymentStrategy) {
  p.PaymentStrategy = strategy
}

// ProcessPayment processes payment using the selected strategy
func (p *PaymentProcessor) ProcessPayment(amount float64) {
  if p.PaymentStrategy != nil {
    p.PaymentStrategy.Pay(amount)
  } else {
    fmt.Println("Payment strategy not set. Please select a payment method.")
  }
}

func main() {
  paymentProcessor := PaymentProcessor{}

  // Select a payment method (strategy) dynamically
  creditCardStrategy := &CreditCardPaymentStrategy{"1234 5678 9012 3456", "12/25", "123"}
  paymentProcessor.SetPaymentStrategy(creditCardStrategy)
  paymentProcessor.ProcessPayment(100)

  // Change payment method (strategy)
  payPalStrategy := &PayPalPaymentStrategy{"example@example.com", "password"}
  paymentProcessor.SetPaymentStrategy(payPalStrategy)
  paymentProcessor.ProcessPayment(50)
}