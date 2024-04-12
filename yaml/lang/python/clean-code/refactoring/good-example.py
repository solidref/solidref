def get_emails(users):
    # Extracting email addresses from a list of users
    return [user['email'] for user in users]