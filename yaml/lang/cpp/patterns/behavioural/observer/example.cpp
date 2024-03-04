#include <algorithm>
#include <iostream>
#include <memory>
#include <vector>

// Forward declaration for Observer to resolve circular dependency
class Observer;

// Subject Interface
class Subject {
public:
  virtual void subscribe(std::shared_ptr<Observer> observer) = 0;
  virtual void unsubscribe(std::shared_ptr<Observer> observer) = 0;
  virtual void notify(const std::string &data) = 0;
  virtual ~Subject() {}
};

// Observer Interface
class Observer {
public:
  virtual void update(const std::string &data) = 0;
  virtual ~Observer() {}
};

// Concrete Subject
class ConcreteSubject : public Subject {
  std::vector<std::shared_ptr<Observer>> observers;

public:
  void subscribe(std::shared_ptr<Observer> observer) override {
    observers.push_back(observer);
  }

  void unsubscribe(std::shared_ptr<Observer> observer) override {
    observers.erase(std::remove(observers.begin(), observers.end(), observer),
                    observers.end());
  }

  void notify(const std::string &data) override {
    for (auto &observer : observers) {
      observer->update(data);
    }
  }
};

// Concrete Observer
class ConcreteObserver : public Observer {
public:
  void update(const std::string &data) override {
    std::cout << "Observer received data: " << data << std::endl;
  }
};

// Client code
int main() {
  auto subject = std::make_shared<ConcreteSubject>();
  auto observer1 = std::make_shared<ConcreteObserver>();
  auto observer2 = std::make_shared<ConcreteObserver>();

  subject->subscribe(observer1);
  subject->subscribe(observer2);

  subject->notify("Hello Observers!");

  subject->unsubscribe(observer2);
  subject->notify("Goodbye Observers!");

  return 0;
}

/**
 * In this example, the Editor class represents an object whose state can be
 * modified. The save method creates a memento containing the current state of
 * the editor, and the restore method restores the editor's state from a given
 * memento.
 *
 * The Memento class represents the stored state of the editor at a particular
 * point in time. The History class is responsible for maintaining a list of
 * mementos. It provides methods to add a memento to the history and retrieve
 * the most recent memento.
 *
 * In the client code, we create an editor object and a history object. We
 * modify the editor's state, save it to a memento, modify it again, and then
 * restore it to the previous state using the memento stored in the history.
 */
