package main

import "fmt"

// Character represents the flyweight object for a character.
type Character struct {
	character string
}

// Display method for a Character
func (c *Character) Display(font string, size int) string {
	return fmt.Sprintf("Character: %s, Font: %s, Size: %d", c.character, font, size)
}

// CharacterFactory acts as a flyweight factory.
type CharacterFactory struct {
	characters map[string]*Character
}

// NewCharacterFactory creates a new instance of CharacterFactory
func NewCharacterFactory() *CharacterFactory {
	return &CharacterFactory{characters: make(map[string]*Character)}
}

// GetCharacter retrieves or creates an instance of a Character.
func (f *CharacterFactory) GetCharacter(character string) *Character {
	if _, exists := f.characters[character]; !exists {
		f.characters[character] = &Character{character}
	}
	return f.characters[character]
}

func main() {
	characterFactory := NewCharacterFactory()

	// Text document
	text := "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

	// Rendering text with flyweight characters
	var renderedText []string

	for _, char := range text {
		character := characterFactory.GetCharacter(string(char))
		renderedText = append(renderedText, character.Display("Arial", 12)) // Assume same font and size for simplicity
	}

	// Displaying rendered text
	fmt.Println(renderedText)
}

/**
* The Character struct represents the flyweight object for a character. It contains intrinsic
* state (the character itself).
*
* The CharacterFactory struct acts as a flyweight factory, creating and managing flyweight
* objects. It ensures that each character is shared among multiple instances.
*
* In the main function, we create a text document and render it using flyweight characters.
* Instead of creating a new character object for each character in the text, we retrieve
* existing flyweight characters from the factory, saving memory and improving performance.
*/