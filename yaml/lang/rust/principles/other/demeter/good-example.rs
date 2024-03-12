struct Wallet {
    money: u32,
}

impl Wallet {
    fn new() -> Wallet {
        Wallet { money: 100 }
    }

    fn get_amount(&self) -> u32 {
        self.money
    }
}

struct Person {
    wallet: Wallet,
}

impl Person {
    fn new() -> Person {
        Person {
            wallet: Wallet::new(),
        }
    }

    fn get_money_amount(&self) -> u32 {
        // Following the Law of Demeter by not exposing internals of Wallet
        self.wallet.get_amount()
    }
}

fn purchase(item: &Item, buyer: &Person) {
    if buyer.get_money_amount() >= item.price {
        // Process the purchase
    }
}

struct Item {
    price: u32,
}