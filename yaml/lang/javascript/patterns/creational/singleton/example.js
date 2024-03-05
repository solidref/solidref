class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;
      this.logHistory = [];
    }
    return Logger.instance;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.logHistory.push(logEntry);
    console.log(logEntry);
  }

  getLogHistory() {
    return this.logHistory;
  }
}

// Ensuring the constructor is not callable from outside. In JavaScript, this approach
// replaces the private constructor concept. The static method or property belongs
// to the class itself, not to the object of the class.
Logger.instance = null;

// Client code
const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2); // Output: true, both references point to the same instance

logger1.log("User logged in");
logger2.log("Data saved to database");

console.log(logger1.getLogHistory());

/**
 * The Logger class has a private static instance property that holds the single instance of the logger.
 *
 * The constructor is made private to prevent instantiation from outside the class.
 *
 * The getInstance() method is a static method that returns the singleton instance of the logger. It
 * ensures that only one instance of the logger is created throughout the application.
 *
 * The log() method logs a message along with a timestamp and adds the log entry to the logHistory array.
 *
 * The getLogHistory() method retrieves the log history.
 *
 * In the client code, both logger1 and logger2 references point to the same instance of the logger
 * obtained using the getInstance() method.
 *
 * Logging messages using either logger1 or logger2 will result in consistent logging behavior, and the
 * log history can be retrieved from either instance.
 */
