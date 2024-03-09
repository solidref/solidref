<?php

// Function to add tax to a price
function addTax($price, $type) {
    $taxRate = 0.05; // General tax rate for all items
    return $price + ($price * $taxRate);
}

// Calculating tax for food
$foodPriceWithTax = addTax(100, 'food');

// Calculating tax for electronics
$electronicsPriceWithTax = addTax(200, 'electronics');

?>