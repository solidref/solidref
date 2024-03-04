#include <iostream>
#include <memory>
#include <string>
#include <unordered_map>

class User;

// Mediator Interface
class ChatMediator {
public:
  virtual void addUser(std::shared_ptr<User> user) = 0;
  virtual void sendMessage(const std::string &message,
                           const std::string &userId) = 0;
  virtual ~ChatMediator() {}
};

// Colleague Interface
class User {
protected:
  std::string id;
  std::shared_ptr<ChatMediator> mediator;

public:
  User(const std::string &id, std::shared_ptr<ChatMediator> mediator)
      : id(id), mediator(mediator) {}
  virtual void send(const std::string &message) = 0;
  virtual void receive(const std::string &message) const = 0;
  std::string getId() const { return id; }
  virtual ~User() {}
};

/** Concrete Mediator */

class ConcreteChatMediator : public ChatMediator {
  std::unordered_map<std::string, std::shared_ptr<User>> users;

public:
  void addUser(std::shared_ptr<User> user) override {
    users[user->getId()] = user;
  }

  void sendMessage(const std::string &message,
                   const std::string &userId) override {
    auto it = users.find(userId);
    if (it != users.end()) {
      it->second->receive(message);
    } else {
      std::cout << "User " << userId << " not found in chat." << std::endl;
    }
  }
};

/** Concrete Colleague */

class ConcreteUser : public User {
public:
  using User::User; // Inherit constructors

  void send(const std::string &message) override {
    std::cout << "Sending from " << id << ": " << message << std::endl;
    mediator->sendMessage(message, id);
  }

  void receive(const std::string &message) const override {
    std::cout << id << " received: " << message << std::endl;
  }
};

int main() {
  auto mediator = std::make_shared<ConcreteChatMediator>();

  auto user1 = std::make_shared<ConcreteUser>("User1", mediator);
  auto user2 = std::make_shared<ConcreteUser>("User2", mediator);

  mediator->addUser(user1);
  mediator->addUser(user2);

  user1->send("Hello from User1 to User2");
  user2->send("Hello from User2 to User1");

  // Attempt to send a message to an unknown user
  mediator->sendMessage("This is a test", "UnknownUser");

  return 0;
}

/**
 * Separation of Concerns: The ChatMediator handles the registration of users
 * and the routing of messages, whereas the User class focuses on sending and
 * receiving messages.
 *
 * Loose Coupling: Users communicate through the mediator without knowing about
 * each other's existence, making it easier to add new user types without
 * affecting existing code.
 *
 * Scalability: The mediator can manage any number of users, facilitating direct
 * or broadcast messaging as needed.
 *
 * Flexibility: The design allows for different types of users and mediators to
 * be introduced with minimal changes to the existing system.
 *
 * This example better showcases the Mediator Design Pattern's capabilities in
 * C++, leveraging smart pointers for memory management and providing a more
 * complex scenario that highlights the pattern's benefits.
 */
