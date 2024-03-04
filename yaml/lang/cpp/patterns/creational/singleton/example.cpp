#include <chrono>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

// Singleton Class Implementation

class Logger {
private:
  static Logger *instance;
  std::vector<std::string> logHistory;

  // Private constructor to prevent instantiation from outside the class
  Logger() {}

public:
  // Deleted copy constructor and assignment operator for singleton property
  Logger(const Logger &) = delete;
  Logger &operator=(const Logger &) = delete;

  // Static method to retrieve the singleton instance
  static Logger *getInstance() {
    if (instance == nullptr) {
      instance = new Logger();
    }
    return instance;
  }

  // Method to log messages
  void log(const std::string &message) {
    auto now = std::chrono::system_clock::now();
    auto now_c = std::chrono::system_clock::to_time_t(now);
    std::stringstream ss;
    ss << std::put_time(std::localtime(&now_c), "[%Y-%m-%d %X]") << " "
       << message;
    std::string logEntry = ss.str();

    logHistory.push_back(logEntry);
    std::cout << logEntry << std::endl;
  }

  // Method to retrieve log history
  std::vector<std::string> getLogHistory() const { return logHistory; }
};

// Initialize the static member of Logger class
Logger *Logger::instance = nullptr;

// Client Code

int main() {
  Logger *logger1 = Logger::getInstance();
  Logger *logger2 = Logger::getInstance();

  std::cout
      << std::boolalpha << (logger1 == logger2)
      << std::endl; // Output: true, both references point to the same instance

  logger1->log("User logged in");
  logger2->log("Data saved to database");

  for (const auto &logEntry : logger1->getLogHistory()) {
    std::cout << logEntry << std::endl;
  }

  return 0;
}

/**
 * The Logger class has a private static instance property that holds the single
 * instance of the logger.
 *
 * The constructor is made private to prevent instantiation from outside the
 * class.
 *
 * The getInstance() method is a static method that returns the singleton
 * instance of the logger. It ensures that only one instance of the logger is
 * created throughout the application.
 *
 * The log() method logs a message along with a timestamp and adds the log entry
 * to the logHistory array.
 *
 * The getLogHistory() method retrieves the log history.
 *
 * In the client code, both logger1 and logger2 references point to the same
 * instance of the logger obtained using the getInstance() method.
 *
 * Logging messages using either logger1 or logger2 will result in consistent
 * logging behavior, and the log history can be retrieved from either instance.
 */
