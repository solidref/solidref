#include <iostream>
#include <string>

// Interface equivalent in C++
class MessageSender {
public:
  virtual void sendMessage(const std::string &message) = 0;
  virtual ~MessageSender() {} // Virtual destructor for proper cleanup
};

class EmailSender : public MessageSender {
public:
  void sendMessage(const std::string &message) override {
    std::cout << "Sending email: " << message << std::endl;
  }
};

class SMSSender : public MessageSender {
public:
  void sendMessage(const std::string &message) override {
    std::cout << "Sending SMS: " << message << std::endl;
  }
};

class NotificationService {
private:
  MessageSender *messageSender; // Using pointer to interface

public:
  // Constructor to initialize messageSender - using initializer list
  NotificationService(MessageSender *sender) : messageSender(sender) {}

  void sendNotification(const std::string &message) {
    messageSender->sendMessage(message);
  }
};

// Example usage
int main() {
  EmailSender emailSender;
  NotificationService emailService(&emailSender);
  emailService.sendNotification("Hello via Email");

  SMSSender smsSender;
  NotificationService smsService(&smsSender);
  smsService.sendNotification("Hello via SMS");

  return 0;
}
