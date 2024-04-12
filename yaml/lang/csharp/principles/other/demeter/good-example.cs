class Wallet
{
    private decimal money;

    public Wallet()
    {
        this.money = 100;
    }

    public decimal GetAmount()
    {
        return this.money;
    }
}

class Person
{
    public Wallet Wallet { get; }

    public Person()
    {
        this.Wallet = new Wallet();
    }

    public decimal GetMoneyAmount()
    {
        return this.Wallet.GetAmount();
    }
}

void Purchase(object item, Person buyer)
{
    // Assuming "item" has a property "Price" of type decimal
    decimal price = ((dynamic)item).price;

    if (buyer.GetMoneyAmount() >= price)
    {
        // Process the purchase
    }
}