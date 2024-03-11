#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Forward declaration for mutual references
typedef struct Memento Memento;

// Editor Struct represents the object whose state needs to be saved and restored
typedef struct {
    char* text;
} Editor;

// Editor function declarations
void initEditor(Editor* editor, const char* text);
void setText(Editor* editor, const char* text);
const char* getText(Editor* editor);
Memento* save(Editor* editor);
void restore(Editor* editor, Memento* memento);

// Memento Struct represents the stored state of the editor
struct Memento {
    char* state;
};

// Memento function declarations
Memento* createMemento(const char* state);
void destroyMemento(Memento* memento);
const char* getState(Memento* memento);

// History Struct is responsible for keeping track of multiple mementos
typedef struct {
    Memento** mementos;
    int size;
    int capacity;
} History;

// History function declarations
void initHistory(History* history);
void addMemento(History* history, Memento* memento);
Memento* getLatestMemento(History* history);
void clearHistory(History* history);

// Editor functions
void initEditor(Editor* editor, const char* text) {
    editor->text = strdup(text);
}

void setText(Editor* editor, const char* text) {
    free(editor->text);
    editor->text = strdup(text);
}

const char* getText(Editor* editor) {
    return editor->text;
}

Memento* save(Editor* editor) {
    return createMemento(editor->text);
}

void restore(Editor* editor, Memento* memento) {
    setText(editor, getState(memento));
}

// Memento functions
Memento* createMemento(const char* state) {
    Memento* m = (Memento*)malloc(sizeof(Memento));
    m->state = strdup(state);
    return m;
}

void destroyMemento(Memento* memento) {
    free(memento->state);
    free(memento);
}

const char* getState(Memento* memento) {
    return memento->state;
}

// History functions
void initHistory(History* history) {
    history->size = 0;
    history->capacity = 2;
    history->mementos = (Memento**)malloc(sizeof(Memento*) * history->capacity);
}

void addMemento(History* history, Memento* memento) {
    if (history->size >= history->capacity) {
        history->capacity *= 2;
        history->mementos = (Memento**)realloc(history->mementos, sizeof(Memento*) * history->capacity);
    }
    history->mementos[history->size++] = memento;
}

Memento* getLatestMemento(History* history) {
    if (history->size == 0) {
        printf("No mementos available\n");
        exit(1);
    }
    return history->mementos[history->size - 1];
}

void clearHistory(History* history) {
    for (int i = 0; i < history->size; i++) {
        destroyMemento(history->mementos[i]);
    }
    free(history->mementos);
    history->mementos = NULL;
    history->size = 0;
    history->capacity = 0;
}

// Main function demonstrating the Memento pattern in C
int main() {
    Editor editor;
    History history;
    
    initEditor(&editor, "Initial text");
    initHistory(&history);
    
    // Add a memento to the history
    addMemento(&history, save(&editor));
    
    // Modify the text
    setText(&editor, "Modified text");
    
    // Add another memento to the history
    addMemento(&history, save(&editor));
    
    // Restore the editor's state to a previous memento
    restore(&editor, getLatestMemento(&history));
    
    printf("%s\n", getText(&editor)); // Output: Modified text (restored from the previous state)
    
    clearHistory(&history);
    free(editor.text);
    
    return 0;
}
