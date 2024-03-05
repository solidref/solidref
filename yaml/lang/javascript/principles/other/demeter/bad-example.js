class Wallet {
  constructor() {
    this.money = { amount: 100 }; // Initialized with an example amount
  }
}

class Person {
  constructor() {
    this.wallet = new Wallet();
  }
}

function purchase(item, buyer) {
  if (buyer.wallet.money.amount >= item.price) {
    // ...
  }
}
