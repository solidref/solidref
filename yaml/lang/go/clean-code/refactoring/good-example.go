package main

import "fmt"

// getEmails receives a slice of users and returns a slice of their email addresses.
func getEmails(users []struct{id int; name, email string}) []string {
	var emails []string
	for _, user := range users {
		emails = append(emails, user.email)
	}
	return emails
}

func main() {
	users := []struct{id int; name, email string}{
		{id: 1, name: "John Doe", email: "john.doe@example.com"},
		{id: 2, name: "Jane Doe", email: "jane.doe@example.com"},
	}
	emails := getEmails(users)
	fmt.Println(emails)
}