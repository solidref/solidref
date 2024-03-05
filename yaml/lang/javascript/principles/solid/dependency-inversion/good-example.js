class EmailSender {
  sendMessage(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SMSSender {
  sendMessage(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  constructor(sender) {
    this.messageSender = sender;
  }

  sendNotification(message) {
    this.messageSender.sendMessage(message);
  }
}

// Usage examples:

// Using an EmailSender
const emailSender = new EmailSender();
const emailNotificationService = new NotificationService(emailSender);
emailNotificationService.sendNotification("Hello via Email!");

// Using an SMSSender
const smsSender = new SMSSender();
const smsNotificationService = new NotificationService(smsSender);
smsNotificationService.sendNotification("Hello via SMS!");
