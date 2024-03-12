fn add_tax(price: f32, tax_rate: f32) -> f32 {
    // Calculate price after tax
    price + (price * tax_rate)
}

// Usage
fn main() {
    let food_price_with_tax = add_tax(100.0, 0.05); // Adding 5% tax for food
    let electronics_price_with_tax = add_tax(100.0, 0.05); // Adding 5% tax for electronics
    
    println!("Food price after tax: {}", food_price_with_tax);
    println!("Electronics price after tax: {}", electronics_price_with_tax);
}