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
