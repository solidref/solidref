struct Wallet {
    money: Money,
}

impl Wallet {
    fn new() -> Self {
        Self { money: Money { amount: 100 } }
    }
}

struct Money {
    amount: i32,
}

struct Person {
    wallet: Wallet,
}

impl Person {
    fn new() -> Self {
        Self { wallet: Wallet::new() }
    }

    // Providing a method to abstract away direct access to the 'money' field.
    fn can_afford(&self, price: i32) -> bool {
        self.wallet.money.amount >= price
    }
}

struct Item {
    price: i32,
}

// Modified function to use Rust idioms and adhere to the Law of Demeter more closely by not directly accessing the wallet's money.
fn purchase(item: &Item, buyer: &Person) {
    if buyer.can_afford(item.price) {
        /* ... */
    }
}