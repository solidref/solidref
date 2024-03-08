using System;

// Define the Mediator interface
public interface IChatMediator
{
    void SendMessage(string message, User user);
}

// Concrete Mediator implementation for a chat room
public class ChatRoom : IChatMediator
{
    public void SendMessage(string message, User user)
    {
        Console.WriteLine($"[{user.GetName()}] sends message: {message}");
    }
}

// Define the Colleague interface
public interface User
{
    void Send(string message);
    void Receive(string message);
    string GetName();
}

// Concrete Colleague implementation for a chat user
public class ChatUser : User
{
    private string name;
    private IChatMediator mediator;

    public ChatUser(string name, IChatMediator mediator)
    {
        this.name = name;
        this.mediator = mediator;
    }

    public void Send(string message)
    {
        Console.WriteLine($"[{this.name}] sends message: {message}");
        mediator.SendMessage(message, this);
    }

    public void Receive(string message)
    {
        Console.WriteLine($"[{this.name}] received message: {message}");
    }

    public string GetName()
    {
        return this.name;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Create a chat room mediator
        IChatMediator chatMediator = new ChatRoom();

        // Create chat users
        User user1 = new ChatUser("User1", chatMediator);
        User user2 = new ChatUser("User2", chatMediator);

        // Send messages between users
        user1.Send("Hello, User2!");
        user2.Send("Hi, User1!");
    }
}

/*
 * In this example, the Mediator pattern is used to facilitate communication between
 * users in a chat room. The IChatMediator interface defines a method SendMessage for
 * sending messages to users. The ChatRoom class provides a concrete implementation
 * of the mediator for managing communication between users in the chat room.
 *
 * The User interface defines methods Send and Receive for sending and receiving messages,
 * respectively, as well as a method GetName for getting the user's name. The ChatUser
 * class implements the User interface and interacts with the mediator to send and
 * receive messages.
 *
 * In the client code, we create a chat room mediator and two chat users. Users can send
 * messages to each other by calling the Send method, which delegates the message sending
 * to the mediator. When a message is received, the mediator distributes it to the
 * appropriate user's Receive method.
 */