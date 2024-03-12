#include <stdio.h>

// Function declaration with default parameter for rate using function overloading
float addTax(float price, float rate);
float addTaxDefault(float price);

// Function definitions
float addTax(float price, float rate) {
    // Adding tax to the price
    return price + (price * rate);
}

float addTaxDefault(float price) {
    // Calling addTax with the default tax rate
    return addTax(price, 0.05);
}

int main() {
    float basePrice = 100.0;

    // Example usage
    printf("Price including tax with specified rate: %.2f\n", addTax(basePrice, 0.10));
    printf("Price including tax with default rate: %.2f\n", addTaxDefault(basePrice));

    return 0;
}