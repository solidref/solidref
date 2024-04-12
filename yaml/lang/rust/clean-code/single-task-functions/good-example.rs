fn split_into_lines(text: &str) -> Vec<&str> {
    text.split('\n').collect()
}

fn process_lines(lines: Vec<&str>) -> Vec<String> {
    // Imagine complex processing here
    lines.iter().map(|line| line.to_uppercase()).collect()
}

fn print_lines(lines: Vec<String>) {
    for line in lines {
        println!("{}", line);
    }
}

fn process_data(input: &str) {
    let lines = split_into_lines(input);
    let processed_lines = process_lines(lines);
    print_lines(processed_lines);
}