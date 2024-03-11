#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Forward declaration for Character struct to be used in CharacterFactory
typedef struct Character Character;

// Character: Represents the Flyweight object.
struct Character {
    char character;
    // Display function to mimic the original class method, takes additional parameters for font and size
    char* (*display)(struct Character* self, char* font, int size);
};

// Function to display the Character details
char* characterDisplay(Character* self, char* font, int size) {
    char* result = (char*)malloc(100 * sizeof(char));
    sprintf(result, "Character: %c, Font: %s, Size: %d", self->character, font, size);
    return result;
}

// Creates a new Character instance with provided character
Character* newCharacter(char character) {
    Character* newChar = (Character*)malloc(sizeof(Character));
    if (newChar != NULL) {
        newChar->character = character;
        newChar->display = characterDisplay;
    }
    return newChar;
}

// CharacterFactory: Acts as the Flyweight Factory, managing character instances.
struct CharacterFactory {
    Character* characters[128]; // Assuming ASCII characters for simplicity
};

// Gets or creates a flyweight Character
Character* getCharacter(struct CharacterFactory* factory, char character) {
    if (factory->characters[(int)character] == NULL) {
        factory->characters[(int)character] = newCharacter(character);
    }
    return factory->characters[(int)character];
}

// Initializes a CharacterFactory instance
void initCharacterFactory(struct CharacterFactory* factory) {
    for (int i = 0; i < 128; ++i) {
        factory->characters[i] = NULL;
    }
}

// Main function illustrating client code
int main() {
    struct CharacterFactory characterFactory;
    initCharacterFactory(&characterFactory);

    char* text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    char* renderedText[1000]; // Assuming a maximum of 1000 characters for rendering

    int i = 0;
    for (char* p = text; *p; ++p) {
        Character* character = getCharacter(&characterFactory, *p);
        renderedText[i++] = character->display(character, "Arial", 12); // Assume same font and size for simplicity
    }

    for (int j = 0; j < i; ++j) {
        printf("%s\n", renderedText[j]);
        free(renderedText[j]); // Free the allocated string after printing
    }

    // Clean up
    for (int k = 0; k < 128; ++k) {
        free(characterFactory.characters[k]);
    }

    return 0;
}

/**
 * In this C version of the Flyweight pattern example, the Character struct and related
 * functions represent the Flyweight object with intrinsic state (the character itself).
 * 
 * The CharacterFactory struct acts as a Flyweight Factory, managing Character instances to ensure
 * shared use across different contexts.
 * 
 * The main function simulates the client code that creates a text document and renders it by reusing
 * Flyweight Characters, thus optimizing memory use and performance.
 */