class Wallet:
    def __init__(self):
        self._money = 100

    def get_amount(self) -> int:
        return self._money

class Person:
    def __init__(self):
        self.wallet = Wallet()

    def get_money_amount(self) -> int:
        return self.wallet.get_amount()

def purchase(item: dict, buyer: Person) -> None:
    if buyer.get_money_amount() >= item['price']:
        print("Purchase successful.")
    else:
        print("Insufficient funds.")

# Usage
item = {'price': 50}
buyer = Person()
purchase(item, buyer)
