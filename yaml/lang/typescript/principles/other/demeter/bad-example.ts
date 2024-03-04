class Wallet {
  money: { amount: number };

  constructor() {
    this.money = { amount: 100 };
  }
}

class Person {
  wallet: Wallet;

  constructor() {
    this.wallet = new Wallet();
  }
}

function purchase(item: { price: number }, buyer: Person) {
  if (buyer.wallet.money.amount >= item.price) { /* ... */ }
}
