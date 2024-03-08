<?php

interface AnimalVisitor {
  public function visitLion(Lion $lion);
  public function visitElephant(Elephant $elephant);
  public function visitGiraffe(Giraffe $giraffe);
}

class AnimalFeeder implements AnimalVisitor {
  public function visitLion(Lion $lion) {
    echo "Feeding meat to " . $lion->getName() . ".\n";
  }

  public function visitElephant(Elephant $elephant) {
    echo "Feeding hay to " . $elephant->getName() . ".\n";
  }

  public function visitGiraffe(Giraffe $giraffe) {
    echo "Feeding leaves to " . $giraffe->getName() . ".\n";
  }
}

interface Animal {
  public function accept(AnimalVisitor $visitor);
}

class Lion implements Animal {
  private $name;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function accept(AnimalVisitor $visitor) {
    $visitor->visitLion($this);
  }
}

class Elephant implements Animal {
  private $name;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function accept(AnimalVisitor $visitor) {
    $visitor->visitElephant($this);
  }
}

class Giraffe implements Animal {
  private $name;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function accept(AnimalVisitor $visitor) {
    $visitor->visitGiraffe($this);
  }
}

class Zoo {
  private $animals = [];

  public function addAnimal(Animal $animal) {
    $this->animals[] = $animal;
  }

  public function performOperation(AnimalVisitor $visitor) {
    foreach ($this->animals as $animal) {
      $animal->accept($visitor);
    }
  }
}

$zoo = new Zoo();
$zoo->addAnimal(new Lion("Simba"));
$zoo->addAnimal(new Elephant("Dumbo"));
$zoo->addAnimal(new Giraffe("Melman"));

$feeder = new AnimalFeeder();
$zoo->performOperation($feeder);

?>