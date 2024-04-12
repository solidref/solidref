fn process_data(input: &str) {
    let result: Vec<String> = input
        .lines()
        .map(|line| {
            // Imagine complex processing here
            line.to_uppercase()
        })
        .collect();
    println!("{:?}", result);
}