```php
<?php

// Rectangle class
class Rectangle {
  public $width;
  public $height;

  public function __construct($width, $height) {
    $this->width = $width;
    $this->height = $height;
  }
}

// Circle class
class Circle {
  public $radius;

  public function __construct($radius) {
    $this->radius = $radius;
  }
}

// AreaCalculator class
class AreaCalculator {
  public function computeArea($shape) {
    // Check if shape is an instance of Rectangle
    if ($shape instanceof Rectangle) {
      return $shape->width * $shape->height;
    }
    // Check if shape is an instance of Circle
    else if ($shape instanceof Circle) {
      return pi() * $shape->radius * $shape->radius;
    }

    return 0;
  }
}

```