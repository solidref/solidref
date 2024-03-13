```rust
trait ChatMediator {
    fn send_message(&self, message: &str, user: &User);
}

struct ChatRoom;
impl ChatMediator for ChatRoom {
    fn send_message(&self, message: &str, user: &User) {
        println!("[{}] sends message: {}", user.get_name(), message);
    }
}

trait User {
    fn send(&self, message: &str);
    fn receive(&self, message: &str);
    fn get_name(&self) -> String;
}

struct ChatUser {
    name: String,
    mediator: Box<dyn ChatMediator>,
}

impl ChatUser {
    fn new(name: String, mediator: Box<dyn ChatMediator>) -> Self {
        ChatUser { name, mediator }
    }
}

impl User for ChatUser {
    fn send(&self, message: &str) {
        println!("[{}] sends message: {}", self.name, message);
        self.mediator.send_message(message, self);
    }

    fn receive(&self, message: &str) {
        println!("[{}] received message: {}", self.name, message);
    }

    fn get_name(&self) -> String {
        self.name.clone()
    }
}

fn main() {
    let chat_mediator: Box<dyn ChatMediator> = Box::new(ChatRoom);

    let user1 = ChatUser::new("User1".to_string(), chat_mediator.clone());
    let user2 = ChatUser::new("User2".to_string(), chat_mediator.clone());

    user1.send("Hello, User2!");
    user2.send("Hi, User1!");
}
```