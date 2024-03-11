#include <stdio.h>
#include <stdlib.h>

// Wallet class equivalent in C
typedef struct {
    int money;
} Wallet;

// Constructor equivalent for Wallet
Wallet* new_Wallet() {
    Wallet* w = (Wallet*)malloc(sizeof(Wallet));
    if (w == NULL) {
        return NULL; // Handle malloc failure
    }
    w->money = 100;
    return w;
}

// Method to get amount of money in Wallet
int Wallet_getAmount(Wallet* w) {
    return w->money;
}

// Person class equivalent in C
typedef struct {
    Wallet* wallet;
} Person;

// Constructor equivalent for Person
Person* new_Person() {
    Person* p = (Person*)malloc(sizeof(Person));
    if (p == NULL) {
        return NULL; // Handle malloc failure
    }
    p->wallet = new_Wallet();
    if (p->wallet == NULL) {
        free(p); // Cleanup if Wallet allocation fails
        return NULL;
    }
    return p;
}

// Method to get the amount of money a Person has
int Person_getMoneyAmount(Person* p) {
    return Wallet_getAmount(p->wallet);
}

// Represents a purchase operation
void purchase(int price, Person* buyer) {
    if (Person_getMoneyAmount(buyer) >= price) {
        // ... (Purchase logic)
    }
}

// Remember to free allocated memory after use
// This is crucial in C to prevent memory leaks
void freePerson(Person* p) {
    if (p) {
        free(p->wallet); // Free associated Wallet
        free(p); // Then free Person
    }
}

int main() {
    // Example of creating a person and attempting a purchase
    Person* person = new_Person();
    if (person == NULL) {
        perror("Failed to allocate Person");
        return 1;
    }

    purchase(50, person);

    freePerson(person); // Cleanup

    return 0;
}