#include <stdio.h>

typedef struct {
    int amount;
} Money;

typedef struct {
    Money money;
} Wallet;

typedef struct {
    Wallet wallet;
} Person;

void initWallet(Wallet *wallet) {
    wallet->money.amount = 100;
}

void initPerson(Person *person) {
    initWallet(&person->wallet);
}

void purchase(int itemPrice, Person *buyer) {
    // This directly accesses the fields of another object,
    // which is a violation of the Law of Demeter.
    if (buyer->wallet.money.amount >= itemPrice) {
        // Perform purchase...
    }
}