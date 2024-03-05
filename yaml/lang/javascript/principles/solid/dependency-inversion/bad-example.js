class EmailSender {
  sendEmail(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SMSSender {
  sendSMS(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  constructor() {
    this.emailSender = new EmailSender();
    this.smsSender = new SMSSender();
  }

  sendNotificationByEmail(message) {
    this.emailSender.sendEmail(message);
  }

  sendNotificationBySMS(message) {
    this.smsSender.sendSMS(message);
  }
}

// Usage examples:

const notificationService = new NotificationService();
notificationService.sendNotificationByEmail("Hello via Email!");
notificationService.sendNotificationBySMS("Hello via SMS!");
