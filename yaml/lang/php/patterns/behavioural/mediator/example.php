<?php

interface ChatMediator {
    public function sendMessage($message, User $user);
}

class ChatRoom implements ChatMediator {
    public function sendMessage($message, User $user) {
        echo "[" . $user->getName() . "] sends message: " . $message . "\n";
    }
}

interface User {
    public function send($message);
    public function receive($message);
    public function getName();
}

class ChatUser implements User {
    private $name;
    private $mediator;

    public function __construct($name, ChatMediator $mediator) {
        $this->name = $name;
        $this->mediator = $mediator;
    }

    public function send($message) {
        echo "[" . $this->name . "] sends message: " . $message . "\n";
        $this->mediator->sendMessage($message, $this);
    }

    public function receive($message) {
        echo "[" . $this->name . "] received message: " . $message . "\n";
    }

    public function getName() {
        return $this->name;
    }
}

function main() {
    $chatMediator = new ChatRoom();

    $user1 = new ChatUser('User1', $chatMediator);
    $user2 = new ChatUser('User2', $chatMediator);

    $user1->send('Hello, User2!');
    $user2->send('Hi, User1!');
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

main();

?>