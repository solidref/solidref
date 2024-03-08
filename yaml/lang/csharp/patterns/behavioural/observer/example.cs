using System;
using System.Collections.Generic;

public interface ISubject
{
    void Subscribe(IObserver observer);
    void Unsubscribe(IObserver observer);
    void Notify(string data);
}

public class ConcreteSubject : ISubject
{
    private List<IObserver> observers = new List<IObserver>();

    public void Subscribe(IObserver observer)
    {
        observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        observers.Remove(observer);
    }

    public void Notify(string data)
    {
        foreach (var observer in observers)
        {
            observer.Update(data);
        }
    }
}

public interface IObserver
{
    void Update(string data);
}

public class ConcreteObserver : IObserver
{
    public void Update(string data)
    {
        Console.WriteLine($"Observer received data: {data}");
    }
}

// Client code
public class Program
{
    public static void Main(string[] args)
    {
        var subject = new ConcreteSubject();
        var observer1 = new ConcreteObserver();
        var observer2 = new ConcreteObserver();

        subject.Subscribe(observer1);
        subject.Subscribe(observer2);

        subject.Notify("Hello Observers!");

        subject.Unsubscribe(observer2);
        subject.Notify("Goodbye Observers!");

        /*
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
    }
}