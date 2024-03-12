trait Notification {
    fn send(&self) -> String;
}

struct BaseNotification;

impl Notification for BaseNotification {
    fn send(&self) -> String {
        "Base notification: You have a new message!".to_string()
    }
}

trait NotificationDecorator: Notification {
    fn new_boxed(notif: Box<dyn Notification>) -> Box<dyn Notification>;
}

struct SoundNotificationDecorator {
    notification: Box<dyn Notification>,
}

impl SoundNotificationDecorator {
    fn new(notification: Box<dyn Notification>) -> Self {
        SoundNotificationDecorator { notification }
    }
}

impl Notification for SoundNotificationDecorator {
    fn send(&self) -> String {
        format!("{} (Sound notification: Ding!)", self.notification.send())
    }
}

struct PriorityNotificationDecorator {
    notification: Box<dyn Notification>,
}

impl PriorityNotificationDecorator {
    fn new(notification: Box<dyn Notification>) -> Self {
        PriorityNotificationDecorator { notification }
    }
}

impl Notification for PriorityNotificationDecorator {
    fn send(&self) -> String {
        format!("{} (Priority notification: High priority!)", self.notification.send())
    }
}

fn main() {
    let base_notification = Box::new(BaseNotification);

    let sound_notification = Box::new(SoundNotificationDecorator::new(base_notification.clone()));
    println!("{}", sound_notification.send());

    let priority_notification = Box::new(PriorityNotificationDecorator::new(base_notification.clone()));
    println!("{}", priority_notification.send());

    let sound_and_priority_notification = Box::new(PriorityNotificationDecorator::new(Box::new(SoundNotificationDecorator::new(base_notification))));
    println!("{}", sound_and_priority_notification.send());
}