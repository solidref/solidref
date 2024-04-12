fn get_emails(users: &[User]) -> Vec<String> {
    // Extracting the email addresses from a list of users
    users.iter().map(|user| user.email.clone()).collect()
}

struct User {
    id: i32,
    name: String,
    email: String,
}