#include <stdio.h>

// A better approach: a single function to add tax for any item
float addTax(float price, float taxRate) {
    return price + (price * taxRate);
}

// Example usage
int main() {
    float foodPrice = 100.0;
    float electronicsPrice = 200.0;
    float taxRate = 0.05; // 5% tax rate for simplicity

    float foodPriceWithTax = addTax(foodPrice, taxRate);
    float electronicsPriceWithTax = addTax(electronicsPrice, taxRate);

    printf("Food price with tax: %.2f\n", foodPriceWithTax);
    printf("Electronics price with tax: %.2f\n", electronicsPriceWithTax);

    return 0;
}