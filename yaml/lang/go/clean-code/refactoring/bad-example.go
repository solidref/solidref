package main

import "fmt"

// User struct to hold user information
type User struct {
    ID    int
    Name  string
    Email string
}

// getEmails extracts emails from a slice of users
func getEmails(users []User) []string {
    var emails []string
    for _, user := range users {
        emails = append(emails, user.Email)
    }
    return emails
}

func main() {
    users := []User{
        {ID: 1, Name: "Alice", Email: "alice@example.com"},
        {ID: 2, Name: "Bob", Email: "bob@example.com"},
    }
    
    emails := getEmails(users)
    fmt.Println(emails)
}