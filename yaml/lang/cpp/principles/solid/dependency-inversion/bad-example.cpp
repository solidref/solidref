#include <iostream>
#include <string>

class EmailSender {
public:
  void sendEmail(const std::string &message) {
    std::cout << "Sending email: " << message << std::endl;
  }
};

class SMSSender {
public:
  void sendSMS(const std::string &message) {
    std::cout << "Sending SMS: " << message << std::endl;
  }
};

class NotificationService {
private:
  EmailSender emailSender; // Instance of EmailSender
  SMSSender smsSender;     // Instance of SMSSender

public:
  NotificationService() = default; // Default constructor

  void sendNotificationByEmail(const std::string &message) {
    emailSender.sendEmail(message);
  }

  void sendNotificationBySMS(const std::string &message) {
    smsSender.sendSMS(message);
  }
};

// Example usage
int main() {
  NotificationService service;
  service.sendNotificationByEmail("Hello World via Email");
  service.sendNotificationBySMS("Hello World via SMS");

  return 0;
}
