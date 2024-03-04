#include <iostream>
#include <memory>
#include <string>
#include <vector>

/**
 * Editor (Originator)
 * The Editor class represents the originator that maintains the current text
 * state and can create and restore mementos of its state.
 */

class Memento {
  friend class Editor;
  std::string state;

  explicit Memento(const std::string &s) : state(s) {}

public:
  std::string getState() const { return state; }
};

class Editor {
  std::string text;

public:
  void type(const std::string &words) { text += words; }

  std::shared_ptr<Memento> save() { return std::make_shared<Memento>(text); }

  void restore(const std::shared_ptr<Memento> &memento) {
    text = memento->getState();
  }

  void print() const { std::cout << "Editor content: " << text << std::endl; }
};

/**
 * Caretaker
 * The Caretaker class is responsible for keeping the history of mementos,
 * allowing the user to undo changes.
 */

class Caretaker {
  Editor &editor;
  std::vector<std::shared_ptr<Memento>> history;
  size_t current;

public:
  explicit Caretaker(Editor &editor) : editor(editor), current(0) {}

  void backup() {
    while (history.size() > current) {
      history.pop_back();
    }
    history.push_back(editor.save());
    current++;
  }

  bool undo() {
    if (current == 0) {
      return false;
    }
    current--;
    editor.restore(history[current]);
    return true;
  }

  bool redo() {
    if (current + 1 >= history.size()) {
      return false;
    }
    editor.restore(history[++current]);
    return true;
  }
};

int main() {
  Editor editor;
  Caretaker caretaker(editor);

  editor.type("This is the first sentence.");
  caretaker.backup();

  editor.type(" This is the second sentence.");
  caretaker.backup();

  editor.type(" This is the third sentence.");
  editor.print();

  std::cout << "Undoing...\n";
  caretaker.undo();
  editor.print();

  std::cout << "Undoing...\n";
  caretaker.undo();
  editor.print();

  std::cout << "Redoing...\n";
  caretaker.redo();
  editor.print();

  return 0;
}

/**
 * Memento: Encapsulates the state of the Editor. Access to its constructor is
 * restricted to the Editor by making it a friend class, ensuring that only the
 * Editor can create mementos.
 *
 * Editor (Originator): Manages the current state and can create and restore
 * snapshots of its state through mementos.
 *
 * Caretaker: Manages the timeline of states by keeping a history of mementos.
 * It provides backup, undo, and redo operations to control the state of the
 * Editor.
 */
