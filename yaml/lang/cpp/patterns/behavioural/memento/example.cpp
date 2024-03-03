#include <iostream>
#include <memory> // For smart pointers
#include <vector>

// Forward declaration
class Memento;

// Originator class
class Editor {
  std::string text;

public:
  Editor(const std::string &text) : text(text) {}

  void setText(const std::string &newText) { text = newText; }

  std::string getText() const { return text; }

  std::shared_ptr<Memento> save() const;
  void restore(const std::shared_ptr<Memento> &memento);
};

// Memento class
class Memento {
  std::string state;

  // Make Editor a friend class to allow it to access the private constructor
  friend class Editor;

  Memento(const std::string &state) : state(state) {}

public:
  std::string getState() const { return state; }
};

// Implementations of Editor's methods that depend on Memento
std::shared_ptr<Memento> Editor::save() const {
  return std::make_shared<Memento>(text);
}

void Editor::restore(const std::shared_ptr<Memento> &memento) {
  text = memento->getState();
}

// Caretaker class
class History {
  std::vector<std::shared_ptr<Memento>> mementos;

public:
  void addMemento(const std::shared_ptr<Memento> &memento) {
    mementos.push_back(memento);
  }

  std::shared_ptr<Memento> getLatestMemento() const {
    if (mementos.empty()) {
      throw std::runtime_error("No mementos available");
    }
    return mementos.back();
  }
};

// Client code
int main() {
  Editor editor("Initial text");
  History history;

  history.addMemento(editor.save()); // Save initial state

  editor.setText("Modified text");
  history.addMemento(editor.save()); // Save modified state

  // Restore the editor's state to the most recent memento
  editor.restore(history.getLatestMemento());
  std::cout << editor.getText() << std::endl; // Output: Modified text

  return 0;
}

/**
 * In this example, the Editor class represents an object whose state can be
 * modified. The save method creates a memento containing the current state of
 * the editor, and the restore method restores the editor's state from a given
 * memento.
 *
 * The Memento class represents the stored state of the editor at a particular
 * point in time.
 *
 * The History class is responsible for maintaining a list of mementos. It
 * provides methods to add a memento to the history and retrieve the most recent
 * memento.
 *
 * In the client code, we create an editor object and a history object. We
 * modify the editor's state, save it to a memento, modify it again, and then
 * restore it to the previous state using the memento stored in the history.
 */
