class Editor:
    def __init__(self, text):
        self.text = text

    def setText(self, text):
        self.text = text

    def getText(self):
        return self.text

    # Creates a memento containing the current state of the editor
    def save(self):
        return Memento(self.text)

    # Restores the editor's state from a memento
    def restore(self, memento):
        self.text = memento.getState()

class Memento:
    def __init__(self, state):
        self.state = state

    def getState(self):
        return self.state

class History:
    def __init__(self):
        self.mementos = []

    # Adds a memento to the history
    def addMemento(self, memento):
        self.mementos.append(memento)

    # Retrieves the most recent memento from the history
    def getLatestMemento(self):
        if not self.mementos:
            raise ValueError("No mementos available")
        return self.mementos[-1]

def main():
    editor = Editor("Initial text")
    history = History()

    # Add a memento to the history
    history.addMemento(editor.save())

    # Modify the text
    editor.setText("Modified text")

    # Add another memento to the history
    history.addMemento(editor.save())

    # Restore the editor's state to a previous memento
    editor.restore(history.getLatestMemento())

    print(editor.getText())  # Output: Modified text (restored from the previous state)

# In this example, the Editor class represents an object whose state can be modified. The save
# method creates a memento containing the current state of the editor, and the restore method
# restores the editor's state from a given memento.
#
# The Memento class represents the stored state of the editor at a particular point in time.
#
# The History class is responsible for maintaining a list of mementos. It provides methods
# to add a memento to the history and retrieve the most recent memento.
#
# In the client code, we create an editor object and a history object. We modify the editor's
# state, save it to a memento, modify it again, and then restore it to the previous state using
# the memento stored in the history.

if __name__ == "__main__":
    main()