public class Wallet {
  private Money money;

  public Wallet() {
    this.money = new Money(100);
  }

  public boolean hasSufficientFunds(int price) {
    return money.amount >= price;
  }
}

public class Person {
  private Wallet wallet;

  public Person() {
    this.wallet = new Wallet();
  }

  public boolean canAffordItem(int price) {
    return wallet.hasSufficientFunds(price);
  }
}

public class Main {
  public static void purchase(Item item, Person buyer) {
    if (buyer.canAffordItem(item.price)) {
      System.out.println("Purchase successful.");
    } else {
      System.out.println("Insufficient funds.");
    }
  }

  public static void main(String[] args) {
    Item item = new Item(50);
    Person buyer = new Person();
    purchase(item, buyer);
  }
}
