class Wallet {
  private money: number;

  constructor() {
    this.money = 100;
  }

  getAmount(): number {
    return this.money;
  }
}

class Person {
  wallet: Wallet;

  constructor() {
    this.wallet = new Wallet();
  }

  getMoneyAmount(): number {
    return this.wallet.getAmount();
  }
}

function purchase(item: { price: number }, buyer: Person) {
  if (buyer.getMoneyAmount() >= item.price) { /* ... */ }
}
