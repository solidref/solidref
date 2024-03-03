#include <functional>
#include <iostream>
#include <memory>
#include <string>
#include <unordered_map>
#include <vector>

// Observer Interface

class INotification {
public:
  virtual ~INotification() = default;
};

class NotificationA : public INotification {
public:
  void message() const { std::cout << "Notification A message" << std::endl; }
};

class NotificationB : public INotification {
public:
  void message() const { std::cout << "Notification B message" << std::endl; }
};

// Subject Interface

class ISubject {
public:
  virtual void
  subscribe(const std::string &notificationType,
            std::function<void(std::shared_ptr<INotification>)> observer) = 0;
  virtual void unsubscribe(const std::string &notificationType) = 0;
  virtual void notify(const std::string &notificationType,
                      std::shared_ptr<INotification> notification) = 0;
  virtual ~ISubject() {}
};

class Subject : public ISubject {
  std::unordered_map<
      std::string,
      std::vector<std::function<void(std::shared_ptr<INotification>)>>>
      observers;

public:
  void subscribe(
      const std::string &notificationType,
      std::function<void(std::shared_ptr<INotification>)> observer) override {
    observers[notificationType].push_back(observer);
  }

  void unsubscribe(const std::string &notificationType) override {
    observers.erase(notificationType);
  }

  void notify(const std::string &notificationType,
              std::shared_ptr<INotification> notification) override {
    if (observers.find(notificationType) != observers.end()) {
      for (auto &observer : observers[notificationType]) {
        observer(notification);
      }
    }
  }
};

int main() {
  Subject subject;

  // Subscribe to NotificationA
  subject.subscribe(
      "NotificationA", [](std::shared_ptr<INotification> notification) {
        auto notif = std::dynamic_pointer_cast<NotificationA>(notification);
        if (notif) {
          notif->message();
        }
      });

  // Subscribe to NotificationB
  subject.subscribe(
      "NotificationB", [](std::shared_ptr<INotification> notification) {
        auto notif = std::dynamic_pointer_cast<NotificationB>(notification);
        if (notif) {
          notif->message();
        }
      });

  // Notify observers
  subject.notify("NotificationA", std::make_shared<NotificationA>());
  subject.notify("NotificationB", std::make_shared<NotificationB>());

  return 0;
}

/**
 * Generic Notification System: The example demonstrates a flexible notification
 * system where observers can subscribe to specific types of notifications.
 *
 * Use of std::function for Callbacks: This allows observers to subscribe using
 * any callable that matches the signature, including free functions, member
 * functions, lambdas, and functors.
 *
 * Type-Safe Notifications: Observers can dynamically cast the notification to
 * the expected type, allowing for type-safe handling of different notification
 * types.
 *
 * Modern C++ Features: Leveraging std::shared_ptr for automatic memory
 * management, std::function for flexible callbacks, and std::unordered_map for
 * efficiently managing subscriptions.
 */
