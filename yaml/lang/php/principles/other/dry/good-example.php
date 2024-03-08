<?php

// Using default parameters for repeated logic
function addTax(float $price, float $rate = 0.05): float {
    return $price + ($price * $rate);
}

?>