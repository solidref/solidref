// ChatMediator.java
interface ChatMediator {
  void sendMessage(String message, User user);
}

// ChatRoom.java
class ChatRoom implements ChatMediator {
  @Override
  public void sendMessage(String message, User user) {
    System.out.println("[" + user.getName() + "] sends message: " + message);
  }
}

// User.java
interface User {
  void send(String message);
  void receive(String message);
  String getName();
}

// ChatUser.java
class ChatUser implements User {
  private String name;
  private ChatMediator mediator;

  public ChatUser(String name, ChatMediator mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  @Override
  public void send(String message) {
    System.out.println("[" + this.name + "] sends message: " + message);
    this.mediator.sendMessage(message, this);
  }

  @Override
  public void receive(String message) {
    System.out.println("[" + this.name + "] received message: " + message);
  }

  @Override
  public String getName() {
    return this.name;
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    ChatMediator chatMediator = new ChatRoom();

    User user1 = new ChatUser("User1", chatMediator);
    User user2 = new ChatUser("User2", chatMediator);

    user1.send("Hello, User2!");
    user2.send("Hi, User1!");
  }
}

/**
 * In this example, the Mediator pattern is used to facilitate communication between
 * users in a chat room. The ChatMediator interface defines a method sendMessage for
 * sending messages to users. The ChatRoom class provides a concrete implementation
 * of the mediator for managing communication between users in the chat room.
 *
 * The User interface defines methods send and receive for sending and receiving messages,
 * respectively, as well as a method getName for getting the user's name. The ChatUser
 * class implements the User interface and interacts with the mediator to send and
 * receive messages.
 *
 * In the client code, we create a chat room mediator and two chat users. Users can send
 * messages to each other by calling the send method, which delegates the message sending
 * to the mediator. When a message is received, the mediator distributes it to the
 * appropriate user's receive method.
 */
