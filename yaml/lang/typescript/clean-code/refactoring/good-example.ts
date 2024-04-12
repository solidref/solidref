function getEmails(users: Array<{id: number; name: string; email: string}>): string[] {
  return users.map((user) => user.email);
}
