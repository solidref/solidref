#include <iostream>

class Wallet {
public:
  struct Money {
    int amount;
  } money;

  Wallet() { money.amount = 100; }
};

class Person {
public:
  Wallet wallet;

  Person() : wallet() {}
};

// Assuming we have a struct or class for items to purchase
class Item {
public:
  int price;

  Item(int price) : price(price) {}
};

void purchase(const Item &item, const Person &buyer) {
  if (buyer.wallet.money.amount >= item.price) {
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
