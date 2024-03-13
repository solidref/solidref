trait PaymentStrategy {
    fn pay(&self, amount: u32);
}

struct CreditCardPaymentStrategy {
    card_number: String,
    expiry_date: String,
    cvv: String,
}

impl PaymentStrategy for CreditCardPaymentStrategy {
    fn pay(&self, amount: u32) {
        println!(
            "Processing credit card payment of ${} with card number {}",
            amount, self.card_number
        );
        // Logic to process payment via credit card
    }
}

struct PayPalPaymentStrategy {
    email: String,
    password: String, // In real applications, avoid storing clear-text passwords
}

impl PaymentStrategy for PayPalPaymentStrategy {
    fn pay(&self, amount: u32) {
        println!("Processing PayPal payment of ${} with email {}", amount, self.email);
        // Logic to process payment via PayPal
    }
}

struct PaymentProcessor {
    payment_strategy: Option<Box<dyn PaymentStrategy>>,
}

impl PaymentProcessor {
    fn new() -> PaymentProcessor {
        PaymentProcessor { payment_strategy: None }
    }

    fn set_payment_strategy(&mut self, strategy: Box<dyn PaymentStrategy>) {
        self.payment_strategy = Some(strategy);
    }

    fn process_payment(&self, amount: u32) {
        match &self.payment_strategy {
            Some(strategy) => strategy.pay(amount),
            None => println!("Payment strategy not set. Please select a payment method."),
        }
    }
}

fn main() {
    let mut payment_processor = PaymentProcessor::new();

    // Select a payment method (strategy) dynamically
    let credit_card_strategy = CreditCardPaymentStrategy {
        card_number: "1234 5678 9012 3456".to_string(),
        expiry_date: "12/25".to_string(),
        cvv: "123".to_string(),
    };
    payment_processor.set_payment_strategy(Box::new(credit_card_strategy));
    payment_processor.process_payment(100);

    // Change payment method (strategy)
    let pay_pal_strategy = PayPalPaymentStrategy {
        email: "example@example.com".to_string(),
        password: "password".to_string(),
    };
    payment_processor.set_payment_strategy(Box::new(pay_pal_strategy));
    payment_processor.process_payment(50);
}