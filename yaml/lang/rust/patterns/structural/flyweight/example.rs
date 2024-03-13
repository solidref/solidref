struct Character {
    character: char,
}

impl Character {
    fn new(character: char) -> Self {
        Character { character }
    }

    fn display(&self, font: &str, size: u32) -> String {
        format!("Character: {}, Font: {}, Size: {}", self.character, font, size)
    }
}

struct CharacterFactory {
    characters: std::collections::HashMap<char, Character>,
}

impl CharacterFactory {
    fn new() -> Self {
        CharacterFactory {
            characters: std::collections::HashMap::new(),
        }
    }

    fn get_character(&mut self, character: char) -> &Character {
        self.characters
            .entry(character)
            .or_insert_with(|| Character::new(character))
    }
}

fn main() {
    let mut character_factory = CharacterFactory::new();

    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    let rendered_text: Vec<String> = text.chars()
        .map(|char| {
            character_factory
                .get_character(char)
                .display("Arial", 12) // Assume same font and size for simplicity
        })
        .collect();

    println!("{}", rendered_text.join("\n"));
}

/*
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