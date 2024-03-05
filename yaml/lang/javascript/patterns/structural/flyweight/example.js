// Flyweight: Character
class Character {
  constructor(character) {
    this.character = character;
  }

  display(font, size) {
    return `Character: ${this.character}, Font: ${font}, Size: ${size}`;
  }
}

// Flyweight Factory: CharacterFactory
class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(character) {
    if (!this.characters[character]) {
      this.characters[character] = new Character(character);
    }
    return this.characters[character];
  }
}

// Client code
const characterFactory = new CharacterFactory();

// Text document
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Rendering text with flyweight characters
const renderedText = [];

for (const char of text) {
  const character = characterFactory.getCharacter(char);
  renderedText.push(character.display('Arial', 12)); // Assume same font and size for simplicity
}

// Displaying rendered text
console.log(renderedText.join('\n'));

/**
 * The Character class represents the flyweight object for a character. It contains intrinsic
 * state (the character itself).
 *
 * The CharacterFactory class acts as a flyweight factory, creating and managing flyweight
 * objects. It ensures that each character is shared among multiple instances.
 *
 * In the client code, we create a text document and render it using flyweight characters.
 * Instead of creating a new character object for each character in the text, we retrieve
 * existing flyweight characters from the factory, saving memory and improving performance.
 */
