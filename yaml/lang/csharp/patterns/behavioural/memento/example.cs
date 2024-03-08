using System;
using System.Collections.Generic;

// Originator class represents the object whose state needs to be saved and restored
class Editor
{
    private string text;

    public Editor(string text)
    {
        this.text = text;
    }

    public void SetText(string text)
    {
        this.text = text;
    }

    public string GetText()
    {
        return this.text;
    }

    // Creates a memento containing the current state of the editor
    public Memento Save()
    {
        return new Memento(this.text);
    }

    // Restores the editor's state from a memento
    public void Restore(Memento memento)
    {
        this.text = memento.GetState();
    }
}

// Memento class represents the stored state of the editor
class Memento
{
    private readonly string state;

    public Memento(string state)
    {
        this.state = state;
    }

    public string GetState()
    {
        return this.state;
    }
}

// Caretaker class is responsible for keeping track of multiple mementos
class History
{
    private readonly List<Memento> mementos = new List<Memento>();

    // Adds a memento to the history
    public void AddMemento(Memento memento)
    {
        this.mementos.Add(memento);
    }

    // Retrieves the most recent memento from the history
    public Memento GetLatestMemento()
    {
        if (this.mementos.Count == 0)
        {
            throw new InvalidOperationException("No mementos available");
        }
        return this.mementos[this.mementos.Count - 1];
    }
}

class Program
{
    static void Main()
    {
        var editor = new Editor("Initial text");

        // Create a history to store mementos
        var history = new History();

        // Add a memento to the history
        history.AddMemento(editor.Save());

        // Modify the text
        editor.SetText("Modified text");

        // Add another memento to the history
        history.AddMemento(editor.Save());

        // Restore the editor's state to a previous memento
        editor.Restore(history.GetLatestMemento());

        Console.WriteLine(editor.GetText()); // Output: Modified text (restored from the previous state)
    }
}

/* 
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