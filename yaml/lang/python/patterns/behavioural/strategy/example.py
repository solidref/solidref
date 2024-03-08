from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: int) -> None:
        pass

class CreditCardPaymentStrategy(PaymentStrategy):
    def __init__(self, card_number: str, expiry_date: str, cvv: str):
        self.card_number = card_number
        self.expiry_date = expiry_date
        self.cvv = cvv

    def pay(self, amount: int) -> None:
        print(f"Processing credit card payment of ${amount} with card number {self.card_number}")
        # Logic to process payment via credit card

class PayPalPaymentStrategy(PaymentStrategy):
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password

    def pay(self, amount: int) -> None:
        print(f"Processing PayPal payment of ${amount} with email {self.email}")
        # Logic to process payment via PayPal

class PaymentProcessor:
    def __init__(self):
        self.payment_strategy = None

    def set_payment_strategy(self, payment_strategy: PaymentStrategy):
        self.payment_strategy = payment_strategy

    def process_payment(self, amount: int):
        if self.payment_strategy:
            self.payment_strategy.pay(amount)
        else:
            print("Payment strategy not set. Please select a payment method.")

def main():
    payment_processor = PaymentProcessor()

    credit_card_strategy = CreditCardPaymentStrategy("1234 5678 9012 3456", "12/25", "123")
    payment_processor.set_payment_strategy(credit_card_strategy)
    payment_processor.process_payment(100)

    pay_pal_strategy = PayPalPaymentStrategy("example@example.com", "password")
    payment_processor.set_payment_strategy(pay_pal_strategy)
    payment_processor.process_payment(50)

if __name__ == "__main__":
    main()