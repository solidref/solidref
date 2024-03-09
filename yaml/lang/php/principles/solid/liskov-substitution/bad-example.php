<?php

abstract class Bird {
  public function fly() {
    // Implementation of flying
  }
}

class Ostrich extends Bird {
  public function fly() {
    throw new Exception("Can't fly");  // Ostrich, being a Bird, should not alter the expected behavior of the fly method
  }
}

?>