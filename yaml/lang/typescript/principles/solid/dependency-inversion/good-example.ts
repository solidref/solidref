interface MessageSender {
  sendMessage(message: string): void;
}

class EmailSender implements MessageSender {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSSender implements MessageSender {
  sendSMS(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  private messageSender: MessageSender;

  constructor(sender: MessageSender) {
    this.messageSender = sender;
  }

  sendNotification(message: string): void {
    this.messageSender.sendMessage(message);
  }
}
