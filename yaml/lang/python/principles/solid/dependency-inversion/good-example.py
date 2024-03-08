from abc import ABC, abstractmethod

class MessageSender(ABC):
    @abstractmethod
    def send_message(self, message: str) -> None:
        pass

class EmailSender(MessageSender):
    def send_message(self, message: str) -> None:
        print(f"Sending email: {message}")

class SMSSender(MessageSender):
    def send_message(self, message: str) -> None:
        print(f"Sending SMS: {message}")

class NotificationService:
    def __init__(self, sender: MessageSender):
        self.message_sender = sender

    def send_notification(self, message: str) -> None:
        self.message_sender.send_message(message)

# Usage
email_sender = EmailSender()
sms_sender = SMSSender()

notification_service_email = NotificationService(email_sender)
notification_service_sms = NotificationService(sms_sender)

notification_service_email.send_notification("Hello via Email!")
notification_service_sms.send_notification("Hello via SMS!")
