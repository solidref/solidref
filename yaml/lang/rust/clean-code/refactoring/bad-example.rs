fn get_emails(users: &[User]) -> Vec<String> {
    // Extracting email addresses from users
    users.iter().map(|user| user.email.clone()).collect()
}

#[derive(Clone)]
struct User {
    id: u32,
    name: String,
    email: String,
}