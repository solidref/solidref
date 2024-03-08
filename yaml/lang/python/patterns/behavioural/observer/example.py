from abc import ABC, abstractmethod
from typing import Any, List

class Subject(ABC):
    @abstractmethod
    def subscribe(self, observer: 'Observer') -> None:
        pass

    @abstractmethod
    def unsubscribe(self, observer: 'Observer') -> None:
        pass

    @abstractmethod
    def notify(self, data: Any) -> None:
        pass

class ConcreteSubject(Subject):
    def __init__(self) -> None:
        self.observers: List[Observer] = []

    def subscribe(self, observer: 'Observer') -> None:
        self.observers.append(observer)

    def unsubscribe(self, observer: 'Observer') -> None:
        if observer in self.observers:
            self.observers.remove(observer)

    def notify(self, data: Any) -> None:
        for observer in self.observers:
            observer.update(data)

class Observer(ABC):
    @abstractmethod
    def update(self, data: Any) -> None:
        pass

class ConcreteObserver(Observer):
    def update(self, data: Any) -> None:
        print(f"Observer received data: {data}")

# Client code
subject = ConcreteSubject()
observer1 = ConcreteObserver()
observer2 = ConcreteObserver()

subject.subscribe(observer1)
subject.subscribe(observer2)

subject.notify('Hello Observers!')

subject.unsubscribe(observer2)
subject.notify('Goodbye Observers!')