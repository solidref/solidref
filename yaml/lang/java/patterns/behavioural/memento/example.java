// Editor.java (Originator)
public class Editor {
  private String text;

  public Editor(String text) {
    this.text = text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public Memento save() {
    return new Memento(this.text);
  }

  public void restore(Memento memento) {
    this.text = memento.getState();
  }
}

// Memento.java
public class Memento {
  private final String state;

  public Memento(String state) {
    this.state = state;
  }

  public String getState() {
    return state;
  }
}

// History.java (Caretaker)
public class History {
  private java.util.List<Memento> mementos = new java.util.ArrayList<>();

  public void addMemento(Memento memento) {
    mementos.add(memento);
  }

  public Memento getLatestMemento() {
    if (mementos.isEmpty()) {
      throw new IllegalStateException("No mementos available");
    }
    return mementos.get(mementos.size() - 1);
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Editor editor = new Editor("Initial text");
    History history = new History();

    history.addMemento(editor.save());
    editor.setText("Modified text");
    history.addMemento(editor.save());

    editor.restore(history.getLatestMemento());
    System.out.println(editor.getText()); // Output: Modified text
  }
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
