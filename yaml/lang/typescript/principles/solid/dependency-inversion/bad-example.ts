class EmailSender {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSSender {
  sendSMS(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  private emailSender: EmailSender;
  private smsSender: SMSSender;

  constructor() {
    this.emailSender = new EmailSender();
    this.smsSender = new SMSSender();
  }

  sendNotificationByEmail(message: string): void {
    this.emailSender.sendEmail(message);
  }

  sendNotificationBySMS(message: string): void {
    this.smsSender.sendSMS(message);
  }
}
