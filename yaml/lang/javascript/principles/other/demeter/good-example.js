class Wallet {
  constructor() {
    this.money = 100; // This is public in ES6. For private fields, use #money and access it with this.#money
  }

  getAmount() {
    return this.money;
  }
}

class Person {
  constructor() {
    this.wallet = new Wallet();
  }

  getMoneyAmount() {
    return this.wallet.getAmount();
  }
}

function purchase(item, buyer) {
  if (buyer.getMoneyAmount() >= item.price) {
    // ...
  }
}
