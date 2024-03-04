#include <functional>
#include <iostream>
#include <memory>
#include <string>
#include <vector>

// Command Interface
class Command {
public:
  virtual void execute() = 0;
  virtual void undo() = 0;
  virtual ~Command() {}
};

// Receiver Class
class TextEditor {
  std::string text;

public:
  void addText(const std::string &newText) { text += newText; }

  void deleteLastCharacter() {
    if (!text.empty()) {
      text.pop_back();
    }
  }

  const std::string &getText() const { return text; }
};

// LambdaCommand adapts a lambda to the Command interface
class LambdaCommand : public Command {
  std::function<void()> action;
  std::function<void()> undoAction;

public:
  LambdaCommand(std::function<void()> action, std::function<void()> undoAction)
      : action(action), undoAction(undoAction) {}

  void execute() override { action(); }

  void undo() override { undoAction(); }
};

class CommandManager {
  std::vector<std::unique_ptr<Command>> history;

public:
  void executeCommand(std::unique_ptr<Command> cmd) {
    cmd->execute();
    history.push_back(std::move(cmd));
  }

  void undo() {
    if (!history.empty()) {
      history.back()->undo();
      history.pop_back();
    }
  }
};

int main() {
  TextEditor editor;
  CommandManager cmdManager;

  // Add text command
  cmdManager.executeCommand(std::make_unique<LambdaCommand>(
      [&editor]() { editor.addText("Hello, "); },
      [&editor]() {
        editor.deleteLastCharacter();
        editor.deleteLastCharacter();
      }));

  // Add more text
  cmdManager.executeCommand(
      std::make_unique<LambdaCommand>([&editor]() { editor.addText("world!"); },
                                      [&editor]() {
                                        for (int i = 0; i < 6; ++i)
                                          editor.deleteLastCharacter();
                                      }));

  std::cout << "Current Text: " << editor.getText() << std::endl;

  // Undo the last command
  cmdManager.undo();
  std::cout << "After undo: " << editor.getText() << std::endl;

  // Undo again
  cmdManager.undo();
  std::cout << "After another undo: " << editor.getText() << std::endl;

  return 0;
}

/**
 * TextEditor: Acts as the receiver with methods to manipulate the text.
 *
 * LambdaCommand: This is a flexible command class that can adapt any pair of
 * lambda expressions to the Command interface. It allows defining both the
 * action and its undo action inline.
 *
 * CommandManager: Acts as the invoker, executing commands and managing the
 * history for undo operations.
 *
 * Client Code: Demonstrates creating a text editor, executing commands to add
 * text, and undoing those commands.
 *
 * This example illustrates a powerful use of the Command Design Pattern in C++,
 * taking full advantage of lambda expressions for concise command definition
 * and smart pointers for automatic memory management, making it more aligned
 * with modern C++ idioms.
 */
