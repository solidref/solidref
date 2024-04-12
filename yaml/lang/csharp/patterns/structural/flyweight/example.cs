using System;
using System.Collections.Generic;

// Flyweight: Character
class Character {
    private string _character;

    public Character(string character) {
        _character = character;
    }

    public string Display(string font, int size) {
        return $"Character: {_character}, Font: {font}, Size: {size}";
    }
}

// Flyweight Factory: CharacterFactory
class CharacterFactory {
    private Dictionary<string, Character> _characters = new Dictionary<string, Character>();

    public Character GetCharacter(string character) {
        if (!_characters.ContainsKey(character)) {
            _characters[character] = new Character(character);
        }
        return _characters[character];
    }
}

class Program {
    static void Main(string[] args) {
        var characterFactory = new CharacterFactory();

        // Text document
        string text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

        // Rendering text with flyweight characters
        var renderedText = new List<string>();

        foreach (var char in text) {
            var character = characterFactory.GetCharacter(char.ToString());
            renderedText.Add(character.Display("Arial", 12)); // Assume same font and size for simplicity
        }

        // Displaying rendered text
        Console.WriteLine(string.Join("\n", renderedText));
    }
}

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