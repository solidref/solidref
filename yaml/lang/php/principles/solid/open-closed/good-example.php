```php
<?php

abstract class Shape {
  // Must be implemented in subclasses
  abstract public function computeArea(): float;
}

class Rectangle extends Shape {
  private float $width;
  private float $height;

  public function __construct(float $width, float $height) {
    $this->width = $width;
    $this->height = $height;
  }

  public function computeArea(): float {
    return $this->width * $this->height;
  }
}

class Circle extends Shape {
  private float $radius;

  public function __construct(float $radius) {
    $this->radius = $radius;
  }

  public function computeArea(): float {
    return pi() * pow($this->radius, 2);
  }
}

?>
```