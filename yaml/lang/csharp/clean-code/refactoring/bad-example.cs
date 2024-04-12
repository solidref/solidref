using System.Collections.Generic;
using System.Linq;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

public class Example
{
    public List<string> GetEmails(List<User> users)
    {
        // This version leverages LINQ to directly map each user to their email, simplifying the loop
        return users.Select(user => user.Email).ToList();
    }
}