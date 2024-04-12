using System;

public class Wallet
{
    public decimal Amount { get; private set; }

    public Wallet()
    {
        Amount = 100;
    }

    public bool HasEnoughMoney(decimal price)
    {
        return Amount >= price;
    }
}

public class Person
{
    public Wallet Wallet { get; private set; }

    public Person()
    {
        Wallet = new Wallet();
    }
}

public class Store
{
    public void Purchase(object item, Person buyer, decimal price)
    {
        if (buyer.Wallet.HasEnoughMoney(price))
        {
            // Item purchase logic
        }
    }
}