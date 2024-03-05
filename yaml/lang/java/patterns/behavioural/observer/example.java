// Subject.java
interface Subject {
    void subscribe(Observer observer);
    void unsubscribe(Observer observer);
    void notifyObservers(String data);
}

// ConcreteSubject.java
class ConcreteSubject implements Subject {
    private java.util.List<Observer> observers = new java.util.ArrayList<>();

    @Override
    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers(String data) {
        for (Observer observer : observers) {
            observer.update(data);
        }
    }
}

// Observer.java
interface Observer {
    void update(String data);
}

// ConcreteObserver.java
class ConcreteObserver implements Observer {
    @Override
    public void update(String data) {
        System.out.println("Observer received data: " + data);
    }
}

// Main.java (Client code)
public class Main {
    public static void main(String[] args) {
        ConcreteSubject subject = new ConcreteSubject();
        Observer observer1 = new ConcreteObserver();
        Observer observer2 = new ConcreteObserver();

        subject.subscribe(observer1);
        subject.subscribe(observer2);

        subject.notifyObservers("Hello Observers!");

        subject.unsubscribe(observer2);
        subject.notifyObservers("Goodbye Observers!");
    }
}


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
