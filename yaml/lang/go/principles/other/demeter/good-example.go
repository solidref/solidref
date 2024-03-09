package main

type Wallet struct {
	money int
}

func NewWallet() *Wallet {
	return &Wallet{money: 100} // Constructor replacement
}

func (w *Wallet) GetAmount() int {
	return w.money // Accessor method
}

type Person struct {
	wallet *Wallet
}

func NewPerson() *Person {
	return &Person{wallet: NewWallet()} // Composition over inheritance, using a factory method
}

func (p *Person) GetMoneyAmount() int {
	return p.wallet.GetAmount() // Delegating method calls rather than exposing internal structure
}

func purchase(item struct{ price int }, buyer *Person) {
	if buyer.GetMoneyAmount() >= item.price {
		// Purchase logic here
	}
}