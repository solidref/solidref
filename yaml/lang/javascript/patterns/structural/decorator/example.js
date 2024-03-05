// Concrete Component: Base Notification
class BaseNotification {
  send() {
    return 'Base notification: You have a new message!';
  }
}

// Decorator: Notification Decorator
class NotificationDecorator {
  constructor(notification) {
    this.notification = notification;
  }

  send() {
    return this.notification.send();
  }
}

// Concrete Decorator: Sound Notification
class SoundNotificationDecorator extends NotificationDecorator {
  send() {
    return `${super.send()} (Sound notification: Ding!)`;
  }
}

// Concrete Decorator: Priority Notification
class PriorityNotificationDecorator extends NotificationDecorator {
  send() {
    return `${super.send()} (Priority notification: High priority!)`;
  }
}

// Client code
const baseNotification = new BaseNotification();
console.log(baseNotification.send());

const soundNotification = new SoundNotificationDecorator(baseNotification);
console.log(soundNotification.send());

const priorityNotification = new PriorityNotificationDecorator(baseNotification);
console.log(priorityNotification.send());

const soundAndPriorityNotification = new PriorityNotificationDecorator(new SoundNotificationDecorator(baseNotification));
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
