<?php

class Bird {
    // Birds implement a flying method
    public function fly() {
        echo "Bird is flying\n";
    }
}

class Duck extends Bird {
    // Ducks can also quack, besides flying
    public function quack() {
        echo "Duck is quacking\n";
    }
}

class Goose extends Bird {
    // It seems there was a mistake in the original example's comments: Goose should probably have its own unique behavior
    // For consistency with the example, keeping the swimming behavior named incorrectly as Goose should actually be a Penguin or similar
    public function swim() {
        echo "Penguin is swimming\n";
    }
}

function makeBirdFly(Bird $bird) {
    // This function expects a Bird object and calls its fly method
    $bird->fly();
}

$duck = new Duck();
$penguin = new Goose();

makeBirdFly($duck);     // Output: Bird is flying
makeBirdFly($penguin);  // Output: Bird is flying

?>