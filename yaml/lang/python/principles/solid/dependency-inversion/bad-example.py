class EmailSender:
    def send_email(self, message: str) -> None:
        print(f"Sending email: {message}")

class SMSSender:
    def send_sms(self, message: str) -> None:
        print(f"Sending SMS: {message}")

class NotificationService:
    def __init__(self):
        self.email_sender = EmailSender()
        self.sms_sender = SMSSender()

    def send_notification_by_email(self, message: str) -> None:
        self.email_sender.send_email(message)

    def send_notification_by_sms(self, message: str) -> None:
        self.sms_sender.send_sms(message)
