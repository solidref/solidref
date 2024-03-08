from abc import ABC, abstractmethod

# Component: Notification
class Notification(ABC):
    @abstractmethod
    def send(self) -> str:
        pass

# Concrete Component: Base Notification
class BaseNotification(Notification):
    def send(self) -> str:
        return 'Base notification: You have a new message!'

# Decorator: Notification Decorator
class NotificationDecorator(Notification):
    def __init__(self, notification: Notification):
        self.notification = notification

    def send(self) -> str:
        return self.notification.send()

# Concrete Decorator: Sound Notification
class SoundNotificationDecorator(NotificationDecorator):
    def send(self) -> str:
        return f'{super().send()} (Sound notification: Ding!)'

# Concrete Decorator: Priority Notification
class PriorityNotificationDecorator(NotificationDecorator):
    def send(self) -> str:
        return f'{super().send()} (Priority notification: High priority!)'

# Client code
base_notification = BaseNotification()
print(base_notification.send())

sound_notification = SoundNotificationDecorator(base_notification)
print(sound_notification.send())

priority_notification = PriorityNotificationDecorator(base_notification)
print(priority_notification.send())

sound_and_priority_notification = PriorityNotificationDecorator(SoundNotificationDecorator(base_notification))
print(sound_and_priority_notification.send())

# The Notification interface defines the common method for sending notifications.
#
# BaseNotification represents the base notification without any additional features.
#
# NotificationDecorator is an abstract class that serves as the base class for concrete decorators.
# It holds a reference to the wrapped notification.
#
# SoundNotificationDecorator adds sound notification functionality to the base notification.
#
# PriorityNotificationDecorator adds priority notification functionality to the base notification.
#
# The client code demonstrates how we can dynamically add sound notification, priority notification,
# or both to the base notification. Each decorator enhances the behavior of the base notification
# without modifying its implementation.