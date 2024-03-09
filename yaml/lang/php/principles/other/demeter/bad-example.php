```php
<?php

class Wallet {
    public $money;

    public function __construct() {
        $this->money = ["amount" => 100];
    }

    // To adhere to the Law of Demeter, provide a method to check the balance
    public function hasEnoughMoney($amount) {
        return $this->money["amount"] >= $amount;
    }
}

class Person {
    private $wallet;

    public function __construct() {
        $this->wallet = new Wallet();
    }

    // To adhere to the Law of Demeter, provide a method to interact with the wallet balance
    public function canAfford($amount) {
        return $this->wallet->hasEnoughMoney($amount);
    }
}

function purchase($item, $buyer) {
    // Use the provided methods to check if the purchase can proceed, adhering to the Law of Demeter
    if ($buyer->canAfford($item["price"])) { /* ... */ }
}

?>
```