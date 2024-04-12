struct Calculator;

impl Calculator {
    // Performs subtraction between two numbers
    fn subtract(&self, minuend: i32, subtrahend: i32) -> i32 {
        minuend - subtrahend
    }
}

fn main() {
    let calculator = Calculator;
    println!("{}", calculator.subtract(10, 5));
}