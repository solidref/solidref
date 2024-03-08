class Character:
    def __init__(self, character):
        self.character = character

    def display(self, font, size):
        return f"Character: {self.character}, Font: {font}, Size: {size}"

class CharacterFactory:
    def __init__(self):
        self.characters = {}

    def getCharacter(self, character):
        if character not in self.characters:
            self.characters[character] = Character(character)
        return self.characters[character]

characterFactory = CharacterFactory()

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

renderedText = []

for char in text:
    character = characterFactory.getCharacter(char)
    renderedText.append(character.display('Arial', 12))  # Assume same font and size for simplicity

print('\n'.join(renderedText))

"""
The Character class represents the flyweight object for a character. It contains intrinsic
state (the character itself).

The CharacterFactory class acts as a flyweight factory, creating and managing flyweight
objects. It ensures that each character is shared among multiple instances.

In the client code, we create a text document and render it using flyweight characters.
Instead of creating a new character object for each character in the text, we retrieve
existing flyweight characters from the factory, saving memory and improving performance.
"""