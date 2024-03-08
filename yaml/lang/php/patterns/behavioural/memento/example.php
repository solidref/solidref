<?php

// Originator class represents the object whose state needs to be saved and restored
class Editor {
  private $text;

  public function __construct($text) {
    $this->text = $text;
  }

  public function setText($text) {
    $this->text = $text;
  }

  public function getText() {
    return $this->text;
  }

  // Creates a memento containing the current state of the editor
  public function save() {
    return new Memento($this->text);
  }

  // Restores the editor's state from a memento
  public function restore(Memento $memento) {
    $this->text = $memento->getState();
  }
}

// Memento class represents the stored state of the editor
class Memento {
  private $state;

  public function __construct($state) {
    $this->state = $state;
  }

  public function getState() {
    return $this->state;
  }
}

// Caretaker class is responsible for keeping track of multiple mementos
class History {
  private $mementos = [];

  // Adds a memento to the history
  public function addMemento(Memento $memento) {
    $this->mementos[] = $memento;
  }

  // Retrieves the most recent memento from the history
  public function getLatestMemento() {
    if (count($this->mementos) === 0) {
      throw new Exception("No mementos available");
    }
    return $this->mementos[count($this->mementos) - 1];
  }
}

// Client code
function main() {
  $editor = new Editor("Initial text");

  // Create a history to store mementos
  $history = new History();

  // Add a memento to the history
  $history->addMemento($editor->save());

  // Modify the text
  $editor->setText("Modified text");

  // Add another memento to the history
  $history->addMemento($editor->save());

  // Restore the editor's state to a previous memento
  $editor->restore($history->getLatestMemento());

  echo $editor->getText() . "\n"; // Output: Modified text (restored from the previous state)
}

/**
 * In this example, the Editor class represents an object whose state can be modified. The save
 * method creates a memento containing the current state of the editor, and the restore method
 * restores the editor's state from a given memento.
 * 
 * The Memento class represents the stored state of the editor at a particular point in time.
 * 
 * The History class is responsible for maintaining a list of mementos. It provides methods 
 * to add a memento to the history and retrieve the most recent memento.
 * 
 * In the client code, we create an editor object and a history object. We modify the editor's 
 * state, save it to a memento, modify it again, and then restore it to the previous state using 
 * the memento stored in the history.
 */

main();

?>