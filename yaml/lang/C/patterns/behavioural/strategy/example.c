#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Definition for "PaymentStrategy" behavior
typedef struct PaymentStrategy_s PaymentStrategy;
struct PaymentStrategy_s {
    void (*pay)(PaymentStrategy*, int amount);
};

// CreditCardPaymentStrategy

typedef struct {
    PaymentStrategy base; // Base type to simulate inheritance
    char* cardNumber;
    char* expiryDate;
    char* cvv;
} CreditCardPaymentStrategy;

void CreditCardPay(PaymentStrategy* strategy, int amount) {
    CreditCardPaymentStrategy* self = (CreditCardPaymentStrategy*)strategy;
    printf("Processing credit card payment of $%d with card number %s\n", amount, self->cardNumber);
    // Logic to process payment via credit card
}

CreditCardPaymentStrategy* NewCreditCardPaymentStrategy(char* cardNumber, char* expiryDate, char* cvv) {
    CreditCardPaymentStrategy* strategy = (CreditCardPaymentStrategy*)malloc(sizeof(CreditCardPaymentStrategy));
    strategy->base.pay = CreditCardPay;
    strategy->cardNumber = strdup(cardNumber);
    strategy->expiryDate = strdup(expiryDate);
    strategy->cvv = strdup(cvv);
    return strategy;
}

// PayPalPaymentStrategy

typedef struct {
    PaymentStrategy base; // Base type to simulate inheritance
    char* email;
    char* password;
} PayPalPaymentStrategy;

void PayPalPay(PaymentStrategy* strategy, int amount) {
    PayPalPaymentStrategy* self = (PayPalPaymentStrategy*)strategy;
    printf("Processing PayPal payment of $%d with email %s\n", amount, self->email);
    // Logic to process payment via PayPal
}

PayPalPaymentStrategy* NewPayPalPaymentStrategy(char* email, char* password) {
    PayPalPaymentStrategy* strategy = (PayPalPaymentStrategy*)malloc(sizeof(PayPalPaymentStrategy));
    strategy->base.pay = PayPalPay;
    strategy->email = strdup(email);
    strategy->password = strdup(password);
    return strategy;
}

// PaymentProcessor

typedef struct {
    PaymentStrategy* strategy; // Current payment strategy
} PaymentProcessor;

void SetPaymentStrategy(PaymentProcessor* processor, PaymentStrategy* strategy) {
    processor->strategy = strategy;
}

void ProcessPayment(PaymentProcessor* processor, int amount) {
    if (processor->strategy) {
        processor->strategy->pay(processor->strategy, amount);
    } else {
        printf("Payment strategy not set. Please select a payment method.\n");
    }
}

/********* Client Code *********/

int main() {
    PaymentProcessor processor = {0};

    // Select a payment method (strategy) dynamically
    CreditCardPaymentStrategy* creditCardStrategy = NewCreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123");
    SetPaymentStrategy(&processor, (PaymentStrategy*)creditCardStrategy);
    ProcessPayment(&processor, 100);

    // Change payment method (strategy)
    PayPalPaymentStrategy* payPalStrategy = NewPayPalPaymentStrategy("example@example.com", "password");
    SetPaymentStrategy(&processor, (PaymentStrategy*)payPalStrategy);
    ProcessPayment(&processor, 50);

    // Cleanup
    free(creditCardStrategy->cardNumber);
    free(creditCardStrategy->expiryDate);
    free(creditCardStrategy->cvv);
    free(creditCardStrategy);

    free(payPalStrategy->email);
    free(payPalStrategy->password);
    free(payPalStrategy);

    return 0;
}