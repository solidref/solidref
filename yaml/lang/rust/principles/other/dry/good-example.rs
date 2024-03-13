fn add_tax(price: f64, rate: f64) -> f64 {
    price * (1.0 + rate)
}

fn main() {
    // Using a default rate if one is not specified
    let default_rate = 0.05;
    let price = 100.0;

    // Example usage with default tax rate
    let total_price_default_rate = add_tax(price, default_rate);
    println!("Total price with default rate: {}", total_price_default_rate);

    // Example usage with specified tax rate
    let specified_rate = 0.10;
    let total_price_specified_rate = add_tax(price, specified_rate);
    println!("Total price with specified rate: {}", total_price_specified_rate);
}