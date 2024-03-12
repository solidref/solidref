#include <stdio.h>
#include <stdbool.h>

// Forward declaration
typedef struct Iterator Iterator;

// Iterator interface
struct Iterator {
    void *collection;
    int index;
    int size;
    void* (*next)(Iterator *self);
    bool (*hasNext)(Iterator *self);
};

// Functions to implement Iterator's behavior
void* next(Iterator *self) {
    // Prevent accessing beyond the collection
    if (self->index < self->size) {
        // Assuming collection is an array of void pointers
        void **items = (void**)self->collection;
        return items[self->index++];
    } else {
        return NULL;
    }
}

bool hasNext(Iterator *self) {
    return self->index < self->size;
}

// Constructor for Iterator
void initIterator(Iterator *iterator, void **collection, int size) {
    iterator->collection = collection;
    iterator->index = 0;
    iterator->size = size;
    iterator->next = next;
    iterator->hasNext = hasNext;
}

// Example specific code
// Here we use void pointers to simulate handling different types, which is not very "C", but illustrates versatility
int main() {
    // Client code
    int i1 = 1, i3 = 3, i5 = 5;
    char *s2 = "two", *s4 = "four";
    void *items[] = {&i1, s2, &i3, s4, &i5};
    int size = 5;

    Iterator iterator;
    initIterator(&iterator, items, size);

    while (iterator.hasNext(&iterator)) {
        // Type casting is required here due to the use of void pointers
        void *item = iterator.next(&iterator);
        if (item) {
            // Determine the type of the item and print it accordingly, this is a crude attempt and not type-safe
            if (item == s2 || item == s4) {
                printf("%s\n", (char *)item);
            } else {
                printf("%d\n", *(int *)item);
            }
        }
    }

    /*
     * In this C example, the Iterator pattern is adapted to iterate over a collection of mixed types (integers and strings in this case),
     * illustrating how an iterator can be implemented in a language without generics. The Iterator structure provides methods to check if
     * there are more elements (hasNext) and to retrieve the next element (next). By using void pointers and explicit initialization,
     * the example demonstrates a way to work around the absence of class constructors and templates in C. It is a simplification to highlight
     * the pattern's essence rather than a fully robust implementation suitable for all use cases.
     */
    return 0;
}