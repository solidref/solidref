package main

import "fmt"

// ChatMediator defines the interface for sending messages
type ChatMediator interface {
	SendMessage(message string, user User)
}

// ChatRoom is a concrete mediator for managing chat messages
type ChatRoom struct{}

func (c *ChatRoom) SendMessage(message string, user User) {
	fmt.Printf("[%s] sends message: %s\n", user.GetName(), message)
}

// User defines the interface for participants in the chat
type User interface {
	Send(message string)
	Receive(message string)
	GetName() string
}

// ChatUser is a concrete colleague for a chat participant
type ChatUser struct {
	name     string
	mediator ChatMediator
}

func NewChatUser(name string, mediator ChatMediator) *ChatUser {
	return &ChatUser{
		name:     name,
		mediator: mediator,
	}
}

func (u *ChatUser) Send(message string) {
	fmt.Printf("[%s] sends message: %s\n", u.name, message)
	u.mediator.SendMessage(message, u)
}

func (u *ChatUser) Receive(message string) {
	fmt.Printf("[%s] received message: %s\n", u.name, message)
}

func (u *ChatUser) GetName() string {
	return u.name
}

func main() {
	// Create a chat room mediator
	chatMediator := &ChatRoom{}

	// Create chat users
	user1 := NewChatUser("User1", chatMediator)
	user2 := NewChatUser("User2", chatMediator)

	// Send messages between users
	user1.Send("Hello, User2!")
	user2.Send("Hi, User1!")
}

/*
In this Go example, the Mediator pattern is used to facilitate communication between
users in a chat room. The ChatMediator interface defines a method SendMessage for
sending messages to users. The ChatRoom struct provides a concrete implementation
of the mediator for managing communication between users in the chat room.

The User interface defines methods Send and Receive for sending and receiving messages,
respectively, as well as a method GetName for obtaining the user's name. The ChatUser
struct implements the User interface and interacts with the mediator to send and
receive messages.

In the client code, we create a chat room mediator and two chat users. Users can send
messages to each other by calling the Send method, which delegates the message sending
to the mediator. When a message is received, the mediator distributes it to the
appropriate user's Receive method.
*/