fn parse_user_input(input: &str) -> Result<i32, &'static str> {
    // Attempts to parse the string into an i32
    match input.parse::<i32>() {
        Ok(num) => Ok(num),
        Err(_) => Err("error"),
    }
}

fn main() {
    let result = parse_user_input("1024");
    match result {
        // Checks if the result is an error
        Err(e) => eprintln!("Failed to parse input."),
        Ok(num) => println!("Parsed input: {}", num),
    }
}