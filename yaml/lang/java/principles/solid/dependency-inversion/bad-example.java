class EmailSender {
    public void sendEmail(String message) {
        System.out.println("Sending email: " + message);
    }
}

class SMSSender {
    public void sendSMS(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

class NotificationService {
    private EmailSender emailSender;
    private SMSSender smsSender;

    public NotificationService() {
        this.emailSender = new EmailSender();
        this.smsSender = new SMSSender();
    }

    public void sendNotificationByEmail(String message) {
        emailSender.sendEmail(message);
    }

    public void sendNotificationBySMS(String message) {
        smsSender.sendSMS(message);
    }
}
