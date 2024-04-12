using System;

// Component: Notification
public interface INotification {
  string Send();
}

// Concrete Component: Base Notification
public class BaseNotification : INotification {
  public string Send() {
    return "Base notification: You have a new message!";
  }
}

// Decorator: Notification Decorator
public abstract class NotificationDecorator : INotification {
  protected INotification notification;

  protected NotificationDecorator(INotification notification) {
    this.notification = notification;
  }

  public virtual string Send() {
    return this.notification.Send();
  }
}

// Concrete Decorator: Sound Notification
public class SoundNotificationDecorator : NotificationDecorator {
  public SoundNotificationDecorator(INotification notification) : base(notification) { }

  public override string Send() {
    return $"{base.Send()} (Sound notification: Ding!)";
  }
}

// Concrete Decorator: Priority Notification
public class PriorityNotificationDecorator : NotificationDecorator {
  public PriorityNotificationDecorator(INotification notification) : base(notification) { }

  public override string Send() {
    return $"{base.Send()} (Priority notification: High priority!)";
  }
}

class Program {
  static void Main(string[] args) {
    INotification baseNotification = new BaseNotification();
    Console.WriteLine(baseNotification.Send());

    INotification soundNotification = new SoundNotificationDecorator(baseNotification);
    Console.WriteLine(soundNotification.Send());

    INotification priorityNotification = new PriorityNotificationDecorator(baseNotification);
    Console.WriteLine(priorityNotification.Send());

    INotification soundAndPriorityNotification = new PriorityNotificationDecorator(new SoundNotificationDecorator(baseNotification));
    Console.WriteLine(soundAndPriorityNotification.Send());
  }
}

/*
 * The Notification interface defines the common method for sending notifications.
 *
 * BaseNotification represents the base notification without any additional features.
 *
 * NotificationDecorator is an abstract class that serves as the base class for concrete decorators.
 * It holds a reference to the wrapped notification.
 *
 * SoundNotificationDecorator adds sound notification functionality to the base notification.
 *
 * PriorityNotificationDecorator adds priority notification functionality to the base notification.
 *
 * The client code demonstrates how we can dynamically add sound notification, priority notification,
 * or both to the base notification. Each decorator enhances the behavior of the base notification
 * without modifying its implementation.
 */