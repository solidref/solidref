// Notification.java (Component)
interface Notification {
  String send();
}

// BaseNotification.java (Concrete Component)
class BaseNotification implements Notification {
  @Override
  public String send() {
    return "Base notification: You have a new message!";
  }
}

// NotificationDecorator.java (Decorator)
abstract class NotificationDecorator implements Notification {
  protected Notification notification;

  protected NotificationDecorator(Notification notification) {
    this.notification = notification;
  }

  @Override
  public String send() {
    return notification.send();
  }
}

// SoundNotificationDecorator.java (Concrete Decorator)
class SoundNotificationDecorator extends NotificationDecorator {
  public SoundNotificationDecorator(Notification notification) {
    super(notification);
  }

  @Override
  public String send() {
    return super.send() + " (Sound notification: Ding!)";
  }
}

// PriorityNotificationDecorator.java (Concrete Decorator)
class PriorityNotificationDecorator extends NotificationDecorator {
  public PriorityNotificationDecorator(Notification notification) {
    super(notification);
  }

  @Override
  public String send() {
    return super.send() + " (Priority notification: High priority!)";
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Notification baseNotification = new BaseNotification();
    System.out.println(baseNotification.send());

    Notification soundNotification = new SoundNotificationDecorator(baseNotification);
    System.out.println(soundNotification.send());

    Notification priorityNotification = new PriorityNotificationDecorator(baseNotification);
    System.out.println(priorityNotification.send());

    Notification soundAndPriorityNotification = new PriorityNotificationDecorator(new SoundNotificationDecorator(baseNotification));
    System.out.println(soundAndPriorityNotification.send());
  }
}

/**
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
