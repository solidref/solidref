using System;
using System.Collections.Generic;
using System.Linq;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

public class Program
{
    public static void Main()
    {
        // Assuming we have a list of users.
        List<User> users = new List<User>
        {
            new User { Id = 1, Name = "John Doe", Email = "john.doe@example.com" },
            new User { Id = 2, Name = "Jane Doe", Email = "jane.doe@example.com" }
        };

        var emails = GetEmails(users);

        // This can be used to print or otherwise process the emails.
        emails.ForEach(Console.WriteLine);
    }

    // Extracts and returns a list of email addresses from a list of users
    public static List<string> GetEmails(List<User> users)
    {
        return users.Select(user => user.Email).ToList();
    }
}