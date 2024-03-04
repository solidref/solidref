#include <iostream>
#include <memory>
#include <mutex>

// Improved Singleton with Thread Safety
// In this example, we use std::call_once and std::once_flag to ensure that the
// Singleton instance is created only once in a thread-safe manner. This
// approach avoids the double-checked locking pattern's complexity and potential
// pitfalls.

class Logger {
private:
  static std::unique_ptr<Logger> instance;
  static std::once_flag onceFlag;

  Logger() {} // Private constructor

public:
  // Deleted copy constructor and assignment operator for singleton property
  Logger(const Logger &) = delete;
  Logger &operator=(const Logger &) = delete;

  // Static method to retrieve the singleton instance
  static Logger *getInstance() {
    std::call_once(onceFlag, []() { instance.reset(new Logger); });
    return instance.get();
  }

  void log(const std::string &message) {
    // Dummy log implementation
    std::cout << message << std::endl;
  }
};

std::unique_ptr<Logger> Logger::instance = nullptr;
std::once_flag Logger::onceFlag;

int main() {
  auto logger1 = Logger::getInstance();
  auto logger2 = Logger::getInstance();

  std::cout << std::boolalpha << (logger1 == logger2)
            << std::endl; // Output: true

  logger1->log("This is a thread-safe singleton logger.");

  return 0;
}

// Thread Safety: By using std::call_once and std::once_flag, this Singleton
// implementation ensures that the instance is created only once, even when
// called from multiple threads simultaneously. This approach is both simpler
// and safer than double-checked locking.

// Modern C++ Practices: The example uses std::unique_ptr for automatic memory
// management of the Singleton instance, ensuring that the instance is properly
// deleted when the program ends or when it is no longer needed.

// Static Initialization: The static instance and flag are initialized outside
// the class, adhering to C++'s rules for static member initialization.

// This refined example demonstrates a thread-safe Singleton implementation in
// C++, utilizing modern C++ features and best practices to ensure safety and
// efficiency. It provides a solid foundation for implementing Singleton objects
// in multithreaded applications, ensuring that only one instance of a class is
// created and accessed throughout the program's lifetime.
