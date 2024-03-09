package main

type Wallet struct {
    amount float64
}

// Constructor for Wallet
func NewWallet() *Wallet {
    return &Wallet{amount: 100}
}

func (w *Wallet) CanAfford(price float64) bool {
    return w.amount >= price
}

type Person struct {
    wallet *Wallet
}

// Constructor for Person
func NewPerson() *Person {
    return &Person{wallet: NewWallet()}
}

func purchase(itemPrice float64, buyer *Person) {
    if buyer.wallet.CanAfford(itemPrice) {
        // Purchase logic...
    }
}