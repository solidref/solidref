class ChatMediator:
    def send_message(self, message, user):
        pass

class ChatRoom(ChatMediator):
    def send_message(self, message, user):
        print(f"[{user.get_name()}] sends message: {message}")

class User:
    def send(self, message):
        pass

    def receive(self, message):
        pass

    def get_name(self):
        pass

class ChatUser(User):
    def __init__(self, name, mediator):
        self.name = name
        self.mediator = mediator

    def send(self, message):
        print(f"[{self.name}] sends message: {message}")
        self.mediator.send_message(message, self)

    def receive(self, message):
        print(f"[{self.name}] received message: {message}")

    def get_name(self):
        return self.name

def main():
    chat_mediator = ChatRoom()

    user1 = ChatUser('User1', chat_mediator)
    user2 = ChatUser('User2', chat_mediator)

    user1.send('Hello, User2!')
    user2.send('Hi, User1!')

if __name__ == '__main__':
    main()