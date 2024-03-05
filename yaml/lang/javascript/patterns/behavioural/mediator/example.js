// Concrete Mediator implementation for a chat room
class ChatRoom {
  sendMessage(message, user) {
    console.log(`[${user.getName()}] sends message: ${message}`);
  }
}

// Concrete Colleague implementation for a chat user
class ChatUser {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    console.log(`[${this.name}] sends message: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message) {
    console.log(`[${this.name}] received message: ${message}`);
  }

  getName() {
    return this.name;
  }
}

// Client code
function main() {
  // Create a chat room mediator
  const chatMediator = new ChatRoom();

  // Create chat users
  const user1 = new ChatUser('User1', chatMediator);
  const user2 = new ChatUser('User2', chatMediator);

  // Send messages between users
  user1.send('Hello, User2!');
  user2.send('Hi, User1!');
}

main();

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
