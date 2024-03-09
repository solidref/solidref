package main

import "fmt"

// Editor represents the object whose state needs to be saved and restored
type Editor struct {
	text string
}

// setText updates the Editor's text
func (e *Editor) setText(text string) {
	e.text = text
}

// getText returns the Editor's text
func (e *Editor) getText() string {
	return e.text
}

// save creates a memento containing the current state of the Editor
func (e *Editor) save() *Memento {
	return &Memento{state: e.text}
}

// restore sets the Editor's state from a memento
func (e *Editor) restore(m *Memento) {
	e.text = m.getState()
}

// Memento represents the stored state of the Editor
type Memento struct {
	state string
}

// getState returns the state of the Memento
func (m *Memento) getState() string {
	return m.state
}

// History is responsible for keeping track of multiple mementos
type History struct {
	mementos []*Memento
}

// addMemento adds a memento to the history
func (h *History) addMemento(m *Memento) {
	h.mementos = append(h.mementos, m)
}

// getLatestMemento retrieves the most recent memento from the history
func (h *History) getLatestMemento() *Memento {
	if len(h.mementos) == 0 {
		panic("No mementos available")
	}
	return h.mementos[len(h.mementos)-1]
}

func main() {
	editor := &Editor{text: "Initial text"}
	history := &History{}

	// Create a history to store mementos
	history.addMemento(editor.save())

	// Modify the text
	editor.setText("Modified text")

	// Add another memento to the history
	history.addMemento(editor.save())

	// Restore the editor's state to a previous memento
	editor.restore(history.getLatestMemento())

	fmt.Println(editor.getText()) // Output: Modified text (restored from the previous state)
}

// This Go code is a translation and adaptation of the Memento design pattern example. 
// The Editor class, which manages an object's state that needs to be saved and restored, is represented by the Editor struct.
// The Memento struct represents the saved state of the Editor at a particular point in time.
// The History struct is responsible for managing a list of mementos, offering methods to add a memento to the history and retrieve the most recent one.
// The client code demonstrates creating an editor and history object, modifying the editor's state, saving states to mementos, and restoring the editor's state from a memento.