package main

import "fmt"

// Subject interface
type Subject interface {
    Subscribe(observer Observer)
    Unsubscribe(observer Observer)
    Notify(data interface{})
}

// ConcreteSubject struct implements Subject interface
type ConcreteSubject struct {
    observers []Observer
}

func (cs *ConcreteSubject) Subscribe(observer Observer) {
    cs.observers = append(cs.observers, observer)
}

func (cs *ConcreteSubject) Unsubscribe(observer Observer) {
    for i, obs := range cs.observers {
        if obs == observer {
            cs.observers = append(cs.observers[:i], cs.observers[i+1:]...)
            break
        }
    }
}

func (cs *ConcreteSubject) Notify(data interface{}) {
    for _, observer := range cs.observers {
        observer.Update(data)
    }
}

// Observer interface
type Observer interface {
    Update(data interface{})
}

// ConcreteObserver struct implements Observer interface
type ConcreteObserver struct{}

func (co *ConcreteObserver) Update(data interface{}) {
    fmt.Printf("Observer received data: %v\n", data)
}

// Client code
func main() {
    subject := &ConcreteSubject{}

    observer1 := &ConcreteObserver{}
    observer2 := &ConcreteObserver{}

    subject.Subscribe(observer1)
    subject.Subscribe(observer2)

    subject.Notify("Hello Observers!")

    subject.Unsubscribe(observer2)
    subject.Notify("Goodbye Observers!")
}

/**
 * In the modified example for Golang, the ConcreteSubject type implements the Subject interface,
 * managing a slice of Observer instances. It provides Subscribe and Unsubscribe methods to manage
 * its observers and a Notify method to update them. The ConcreteObserver type implements the Observer
 * interface with an Update method that prints data it received.
 *
 * The main function demonstrates creating a ConcreteSubject and two ConcreteObserver instances, simulating 
 * a subscriber mechanism. It showcases subscribing observers to the subject, notifying them with data, 
 * unsubscribing one, and notifying the remaining observer.
 *
 * Notably, idiomatic Go does not use exceptions or the same level of encapsulation as might be typical in 
 * object-oriented patterns found in languages like Java or TypeScript. Therefore, the Go version uses slices 
 * for management of observers and simple interface method calls for notification and observer update mechanism. 
 */