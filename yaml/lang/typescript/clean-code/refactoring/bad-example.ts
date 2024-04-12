function getEmails(users: Array<{id: number; name: string; email: string}>): string[] {
  let emails = [];
  for (let i = 0; i < users.length; i++) {
    emails.push(users[i].email);
  }
  return emails;
}
