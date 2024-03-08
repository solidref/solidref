```csharp
using System;

public class Wallet
{
    // Representing wallet with money inside
    public Money Money { get; set; }

    public Wallet()
    {
        // Initialize wallet with $100
        this.Money = new Money { Amount = 100 };
    }
}

public class Money
{
    // Money amount
    public decimal Amount { get; set; }
}

public class Person
{
    // Person has a wallet
    public Wallet Wallet { get; set; }

    public Person()
    {
        // Initialize person with a wallet
        this.Wallet = new Wallet();
    }
}

public class Program
{
    public static void Purchase(Item item, Person buyer)
    {
        // Check if buyer's wallet has enough money for the item
        if (buyer.Wallet.Money.Amount >= item.Price)
        {
            // Purchase logic...
        }
    }

    public static void Main(string[] args)
    {
        // Example usage
    }
}

public class Item
{
    // Item has a price
    public decimal Price { get; set; }
}
```