fn parse_user_input(input: &str) -> Result<i32, &'static str> {
    match input.parse::<i32>() {
        Ok(num) => Ok(num),
        Err(_) => Err("Input cannot be parsed to a number."),
    }
}

fn main() {
    match parse_user_input("1024") {
        Ok(result) => println!("Parsed input: {}", result),
        Err(e) => eprintln!("Failed to parse input: {}", e),
    }
}