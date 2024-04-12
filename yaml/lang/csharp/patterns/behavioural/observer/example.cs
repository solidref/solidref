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
    private List<IObserver> observers = new();

    public void Subscribe(IObserver observer)
    {
        this.observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        this.observers.Remove(observer);
    }

    public void Notify(string data)
    {
        foreach(var observer in observers)
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

// Example usage
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
    }
}

/*
In this example, instead of an Editor class with save and restore capabilities based on a memento pattern, we have a subject-observer setup. The ConcreteSubject class represents an object monitored by multiple observers. When its state changes, it notifies all subscribed observers by calling their Update method with the new data. The ConcreteObserver class, implementing the IObserver interface, simply prints out the data it receives. This demonstrates a simple instance of the Observer pattern where objects wishing to receive updates from a subject can subscribe or unsubscribe from these notifications.*/