class Wallet:
    def __init__(self):
        self.money = {'amount': 100}

class Person:
    def __init__(self):
        self.wallet = Wallet()

def purchase(item: dict, buyer: Person) -> None:
    if buyer.wallet.money['amount'] >= item['price']:
        print("Purchase can be made.")
    else:
        print("Insufficient funds.")

# Usage
item = {'price': 50}
buyer = Person()
purchase(item, buyer)
