public class Wallet {
  private int money;

  public Wallet() {
    this.money = 100;
  }

  public int getAmount() {
    return this.money;
  }
}

public class Person {
  private Wallet wallet;

  public Person() {
    this.wallet = new Wallet();
  }

  public int getMoneyAmount() {
    return this.wallet.getAmount();
  }
}

class Item {
  public int price;

  public Item(int price) {
    this.price = price;
  }
}

public class Main {
  public static void purchase(Item item, Person buyer) {
    if (buyer.getMoneyAmount() >= item.price) {
      // Process the purchase
      System.out.println("Purchase successful.");
    } else {
      System.out.println("Insufficient funds.");
    }
  }

  public static void main(String[] args) {
    Item item = new Item(50); // Assuming an item price
    Person buyer = new Person();
    purchase(item, buyer);
  }
}
