class Logger {
  private static instance: Logger;
  private logHistory: string[] = [];

  // Private constructor to prevent instantiation from outside the class
  private constructor() { }

  // Static method to retrieve the singleton instance
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // Method to log messages
  log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.logHistory.push(logEntry);
    console.log(logEntry);
  }

  // Method to retrieve log history
  getLogHistory(): string[] {
    return this.logHistory;
  }
}

// Client code
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

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
