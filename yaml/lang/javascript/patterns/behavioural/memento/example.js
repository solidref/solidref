// Originator class represents the object whose state needs to be saved and restored
class Editor {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  setText(text: string): void {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  // Creates a memento containing the current state of the editor
  save(): Memento {
    return new Memento(this.text);
  }

  // Restores the editor's state from a memento
  restore(memento: Memento): void {
    this.text = memento.getState();
  }
}

// Memento class represents the stored state of the editor
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Caretaker class is responsible for keeping track of multiple mementos
class History {
  private mementos: Memento[] = [];

  // Adds a memento to the history
  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  // Retrieves the most recent memento from the history
  getLatestMemento(): Memento {
    if (this.mementos.length === 0) {
      throw new Error("No mementos available");
    }
    return this.mementos[this.mementos.length - 1];
  }
}

// Client code
function main() {
  const editor = new Editor("Initial text");

  // Create a history to store mementos
  const history = new History();

  // Add a memento to the history
  history.addMemento(editor.save());

  // Modify the text
  editor.setText("Modified text");

  // Add another memento to the history
  history.addMemento(editor.save());

  // Restore the editor's state to a previous memento
  editor.restore(history.getLatestMemento());

  console.log(editor.getText()); // Output: Modified text (restored from the previous state)
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
