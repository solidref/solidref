```php
<?php

// Component: Notification
interface Notification {
  public function send(): string;
}

// Concrete Component: Base Notification
class BaseNotification implements Notification {
  public function send(): string {
    return 'Base notification: You have a new message!';
  }
}

// Decorator: Notification Decorator
abstract class NotificationDecorator implements Notification {
  protected $notification;

  public function __construct(Notification $notification) {
    $this->notification = $notification;
  }

  public function send(): string {
    return $this->notification->send();
  }
}

// Concrete Decorator: Sound Notification
class SoundNotificationDecorator extends NotificationDecorator {
  public function send(): string {
    return parent::send() . " (Sound notification: Ding!)";
  }
}

// Concrete Decorator: Priority Notification
class PriorityNotificationDecorator extends NotificationDecorator {
  public function send(): string {
    return parent::send() . " (Priority notification: High priority!)";
  }
}

// Client code
$baseNotification = new BaseNotification();
echo $baseNotification->send() . "\n";

$soundNotification = new SoundNotificationDecorator($baseNotification);
echo $soundNotification->send() . "\n";

$priorityNotification = new PriorityNotificationDecorator($baseNotification);
echo $priorityNotification->send() . "\n";

$soundAndPriorityNotification = new PriorityNotificationDecorator(new SoundNotificationDecorator($baseNotification));
echo $soundAndPriorityNotification->send() . "\n";

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
```