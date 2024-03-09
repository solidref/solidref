<?php

class Calculator {
  public function add($a, $b) {
    return $a + $b;
  }

  // Do not define methods unless they are used

  public function multiply($a, $b) {
    return $a * $b;
  }

  public function divide($a, $b) {
    if ($b === 0) {
      throw new Exception("Division by zero is not allowed.");
    }
    return $a / $b;
  }

  public function subtract($a, $b) {
    return $a - $b;
  }
}

?>