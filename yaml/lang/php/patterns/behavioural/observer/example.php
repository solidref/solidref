```php
<?php

interface Subject {
    public function subscribe($observer);
    public function unsubscribe($observer);
    public function notify($data);
}

class ConcreteSubject implements Subject {
    private $observers = [];

    public function subscribe($observer) {
        $this->observers[] = $observer;
    }

    public function unsubscribe($observer) {
        $index = array_search($observer, $this->observers, true);
        if ($index !== false) {
            unset($this->observers[$index]);
        }
    }

    public function notify($data) {
        foreach ($this->observers as $observer) {
            $observer->update($data);
        }
    }
}

interface Observer {
    public function update($data);
}

class ConcreteObserver implements Observer {
    public function update($data) {
        echo "Observer received data: ".$data.PHP_EOL;
    }
}

// Client code
$subject = new ConcreteSubject();
$observer1 = new ConcreteObserver();
$observer2 = new ConcreteObserver();

$subject->subscribe($observer1);
$subject->subscribe($observer2);

$subject->notify('Hello Observers!');

$subject->unsubscribe($observer2);
$subject->notify('Goodbye Observers!');

/**
 * In this example, the Editor class represents an object whose state can be modified.
 * The save method creates a memento containing the current state of the editor, and
 * the restore method restores the editor's state from a given memento.
 *
 * The Memento class represents the stored state of the editor at a particular point in time.
 * The History class is responsible for maintaining a list of mementos. It provides
 * methods to add a memento to the history and retrieve the most recent memento.
 *
 * In the client code, we create an editor object and a history object. We modify the
 * editor's state, save it to a memento, modify it again, and then restore it to the
 * previous state using the memento stored in the history.
 */
```