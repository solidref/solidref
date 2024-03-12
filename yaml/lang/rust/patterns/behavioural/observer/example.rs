use std::cell::RefCell;
use std::rc::{Rc, Weak};

trait Subject {
    fn subscribe(&self, observer: Rc<RefCell<dyn Observer>>);
    fn unsubscribe(&self, observer: Weak<RefCell<dyn Observer>>);
    fn notify(&self, data: &str);
}

struct ConcreteSubject {
    observers: RefCell<Vec<Weak<RefCell<dyn Observer>>>>,
}

impl ConcreteSubject {
    fn new() -> Self {
        ConcreteSubject {
            observers: RefCell::new(Vec::new()),
        }
    }
}

impl Subject for ConcreteSubject {
    fn subscribe(&self, observer: Rc<RefCell<dyn Observer>>) {
        self.observers.borrow_mut().push(Rc::downgrade(&observer));
    }

    fn unsubscribe(&self, observer: Weak<RefCell<dyn Observer>>) {
        let mut observers = self.observers.borrow_mut();
        if let Some(position) = observers.iter().position(|obs| obs.ptr_eq(&observer)) {
            observers.remove(position);
        }
    }

    fn notify(&self, data: &str) {
        for observer_weak in self.observers.borrow().iter() {
            if let Some(observer) = observer_weak.upgrade() {
                observer.borrow().update(data);
            }
        }
    }
}

trait Observer {
    fn update(&self, data: &str);
}

struct ConcreteObserver;

impl Observer for ConcreteObserver {
    fn update(&self, data: &str) {
        println!("Observer received data: {}", data);
    }
}

fn main() {
    let subject = Rc::new(ConcreteSubject::new());
    let observer1 = Rc::new(RefCell::new(ConcreteObserver));
    let observer2 = Rc::new(RefCell::new(ConcreteObserver));

    subject.subscribe(observer1.clone());
    subject.subscribe(observer2.clone());

    subject.notify("Hello Observers!");

    subject.unsubscribe(Rc::downgrade(&observer2));
    subject.notify("Goodbye Observers!");

    // The section below related to Editor, Memento, and History patterns is not part of the Observer pattern example.
    // However, the description provided in the comment is valuable for understanding those additional patterns.
}