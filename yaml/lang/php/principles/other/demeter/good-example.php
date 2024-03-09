```php
<?php
class Wallet {
  private $money;

  // Constructor initializes the wallet with some amount of money
  public function __construct() {
    $this->money = 100;
  }

  // Method to get the amount of money in the wallet
  public function getAmount() {
    return $this->money;
  }
}

class Person {
  private $wallet;

  // Constructor initializes person with a Wallet object
  public function __construct() {
    $this->wallet = new Wallet();
  }

  // Method to retrieve the amount of money from the person's wallet
  public function getMoneyAmount() {
    return $this->wallet->getAmount();
  }
}

function purchase($item, $buyer) {
  // Checks if the buyer has enough money to purchase the item
  if ($buyer->getMoneyAmount() >= $item['price']) {
    // Purchase logic...
  }
}
```