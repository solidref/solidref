// Define the Mediator interface
interface ChatMediator {
  sendMessage(message: string, user: User): void;
}

// Concrete Mediator implementation for a chat room
class ChatRoom implements ChatMediator {
  sendMessage(message: string, user: User): void {
    console.log(`[${user.getName()}] sends message: ${message}`);
  }
}

// Define the Colleague interface
interface User {
  send(message: string): void;
  receive(message: string): void;
  getName(): string;
}

// Concrete Colleague implementation for a chat user
class ChatUser implements User {
  private name: string;
  private mediator: ChatMediator;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message: string): void {
    console.log(`[${this.name}] sends message: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string): void {
    console.log(`[${this.name}] received message: ${message}`);
  }

  getName(): string {
    return this.name;
  }
}

// Client code
function main() {
  // Create a chat room mediator
  const chatMediator: ChatMediator = new ChatRoom();

  // Create chat users
  const user1: User = new ChatUser('User1', chatMediator);
  const user2: User = new ChatUser('User2', chatMediator);

  // Send messages between users
  user1.send('Hello, User2!');
  user2.send('Hi, User1!');
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
