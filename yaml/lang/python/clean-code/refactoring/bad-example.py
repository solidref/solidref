def get_emails(users):
    # Assuming users is a list of dictionaries with keys id, name, and email
    return [user['email'] for user in users]