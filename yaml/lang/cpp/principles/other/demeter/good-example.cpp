#include <iostream>

class Wallet {
private:
  int money;

public:
  Wallet() : money(100) {}

  int getAmount() const { return money; }
};

class Person {
private:
  Wallet wallet;

public:
  Person() : wallet() {}

  int getMoneyAmount() const { return wallet.getAmount(); }
};

// Assuming we have a struct or class for items to purchase
class Item {
public:
  int price;

  Item(int price) : price(price) {}
};

void purchase(const Item &item, const Person &buyer) {
  if (buyer.getMoneyAmount() >= item.price) {
    // Implement the purchase logic here...
  }
}

// Example usage
int main() {
  Person buyer;
  Item item(50); // Assume an item costs 50

  purchase(item, buyer);

  return 0;
}
