interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(data: any): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

interface Observer {
  update(data: any): void;
}

class ConcreteObserver implements Observer {
  update(data: any) {
    console.log(`Observer received data: ${data}`);
  }
}

// Client code
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello Observers!');

subject.unsubscribe(observer2);
subject.notify('Goodbye Observers!');

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
