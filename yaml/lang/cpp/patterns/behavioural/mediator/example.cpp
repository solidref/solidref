#include <iostream>
#include <string>

// Forward declaration
class User;

// Define the Mediator interface
class ChatMediator {
public:
  virtual void sendMessage(const std::string &message, User *user) = 0;
  virtual ~ChatMediator() {}
};

// Concrete Mediator implementation for a chat room
class ChatRoom : public ChatMediator {
public:
  void sendMessage(const std::string &message, User *user) override;
};

// Define the Colleague (User) interface
class User {
protected:
  std::string name;
  ChatMediator *mediator;

public:
  User(const std::string &name, ChatMediator *mediator)
      : name(name), mediator(mediator) {}
  virtual void send(const std::string &message) = 0;
  virtual void receive(const std::string &message) = 0;
  std::string getName() const { return name; }
  virtual ~User() {}
};

// Implement sendMessage to avoid incomplete type error
void ChatRoom::sendMessage(const std::string &message, User *user) {
  std::cout << "[" << user->getName() << "] sends message: " << message
            << std::endl;
}

// Concrete Colleague implementation for a chat user
class ChatUser : public User {
public:
  ChatUser(const std::string &name, ChatMediator *mediator)
      : User(name, mediator) {}

  void send(const std::string &message) override {
    std::cout << "[" << this->name << "] sends message: " << message
              << std::endl;
    mediator->sendMessage(message, this);
  }

  void receive(const std::string &message) override {
    std::cout << "[" << this->name << "] received message: " << message
              << std::endl;
  }
};

// Client code
int main() {
  ChatRoom chatMediator;

  ChatUser user1("User1", &chatMediator);
  ChatUser user2("User2", &chatMediator);

  user1.send("Hello, User2!");
  user2.send("Hi, User1!");

  return 0;
}

/**
 * In this example, the Mediator pattern is used to facilitate communication
 * between users in a chat room. The ChatMediator interface defines a method
 * sendMessage for sending messages to users. The ChatRoom class provides a
 * concrete implementation of the mediator for managing communication between
 * users in the chat room.
 *
 * The User interface defines methods send and receive for sending and receiving
 * messages, respectively, as well as a method getName for getting the user's
 * name. The ChatUser class implements the User interface and interacts with the
 * mediator to send and receive messages.
 *
 * In the client code, we create a chat room mediator and two chat users. Users
 * can send messages to each other by calling the send method, which delegates
 * the message sending to the mediator. When a message is received, the mediator
 * distributes it to the appropriate user's receive method.
 */
