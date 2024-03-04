// Component: Notification
interface Notification {
  send(): string;
}

// Concrete Component: Base Notification
class BaseNotification implements Notification {
  send(): string {
    return 'Base notification: You have a new message!';
  }
}

// Decorator: Notification Decorator
abstract class NotificationDecorator implements Notification {
  protected notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  send(): string {
    return this.notification.send();
  }
}

// Concrete Decorator: Sound Notification
class SoundNotificationDecorator extends NotificationDecorator {
  send(): string {
    return `${super.send()} (Sound notification: Ding!)`;
  }
}

// Concrete Decorator: Priority Notification
class PriorityNotificationDecorator extends NotificationDecorator {
  send(): string {
    return `${super.send()} (Priority notification: High priority!)`;
  }
}

// Client code
const baseNotification: Notification = new BaseNotification();
console.log(baseNotification.send());

const soundNotification: Notification = new SoundNotificationDecorator(baseNotification);
console.log(soundNotification.send());

const priorityNotification: Notification = new PriorityNotificationDecorator(baseNotification);
console.log(priorityNotification.send());

const soundAndPriorityNotification: Notification = new PriorityNotificationDecorator(new SoundNotificationDecorator(baseNotification));
console.log(soundAndPriorityNotification.send());

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
