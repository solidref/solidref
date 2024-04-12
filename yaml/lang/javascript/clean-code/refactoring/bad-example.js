function getEmails(users) {
  // Return a list of emails from the given list of users
  return users.map(user => user.email);
}