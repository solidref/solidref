#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Forward declaration
struct User;

// Mediator Interface in C
typedef struct ChatMediator {
  void (*sendMessage)(struct ChatMediator* self, const char* message, struct User* user);
} ChatMediator;

// User Interface in C
typedef struct User {
  char* (*getName)(struct User* self);
  void (*send)(struct User* self, const char* message);
  void (*receive)(struct User* self, const char* message);
  char name[50];
  ChatMediator* mediator;
} User;

// Implement sendMessage for ChatMediator
void chatRoomSendMessage(ChatMediator* self, const char* message, User* user) {
  printf("[%s] sends message: %s\n", user->getName(user), message);
}

// Create ChatRoom as a type of ChatMediator
ChatMediator* newChatRoom() {
  ChatMediator* newChatMediator = (ChatMediator*)malloc(sizeof(ChatMediator));
  newChatMediator->sendMessage = chatRoomSendMessage;
  return newChatMediator;
}

// User's Methods
char* getName(User* self) {
  return self->name;
}

void send(User* self, const char* message) {
  printf("[%s] sends message: %s\n", self->getName(self), message);
  self->mediator->sendMessage(self->mediator, message, self);
}

void receive(User* self, const char* message) {
  printf("[%s] received message: %s\n", self->getName(self), message);
}

// Constructor for ChatUser, derived from User
User* newUser(char* name, ChatMediator* mediator) {
  User* newUser = (User*)malloc(sizeof(User));
  strcpy(newUser->name, name);
  newUser->mediator = mediator;
  newUser->getName = getName;
  newUser->send = send;
  newUser->receive = receive;
  return newUser;
}

// Main Function
int main() {
  // Creating a ChatMediator
  ChatMediator* chatMediator = newChatRoom();

  // Creating Users
  User* user1 = newUser("User1", chatMediator);
  User* user2 = newUser("User2", chatMediator);

  // Sending Messages
  user1->send(user1, "Hello, User2!");
  user2->send(user2, "Hi, User1!");

  // Cleanup
  free(user1);
  free(user2);
  free(chatMediator);

  return 0;
}

/**
 * In this C adaptation of the Mediator pattern example, communication between users in a chat room
 * is facilitated through the Mediator design pattern. The ChatMediator struct acts as an interface
 * for sending messages, with its concrete implementation in the ChatRoom. The sendMessage function
 * of the ChatRoom sends a message from one user to another.
 *
 * The User struct serves as an interface for chat participants, allowing them to send and receive
 * messages, and to return their names. The ChatUser is a concrete User that interacts with a mediator
 * to facilitate message sending and receiving.
 *
 * In the main function, a chat room mediator and two chat users are created. The users send messages to
 * each other through the mediator, demonstrating the decoupling of communication logic from the user objects
 * themselves, which is the core benefit of the Mediator pattern.
 */