class Wallet {
  #money;

  constructor() {
    this.#money = 100;
  }

  getAmount() {
    return this.#money;
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
