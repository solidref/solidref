function getEmails(users) {
  // Extracts email addresses from an array of users
  return users.map(user => user.email);
}