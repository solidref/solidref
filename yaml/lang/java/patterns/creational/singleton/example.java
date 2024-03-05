public class Logger {
  private static Logger instance;
  private java.util.List<String> logHistory = new java.util.ArrayList<>();

  // Private constructor to prevent instantiation from outside the class
  private Logger() { }

  // Static method to retrieve the singleton instance
  public static Logger getInstance() {
    if (instance == null) {
      instance = new Logger();
    }
    return instance;
  }

  // Method to log messages
  public void log(String message) {
    String timestamp = java.time.LocalDateTime.now().toString();
    String logEntry = "[" + timestamp + "] " + message;
    logHistory.add(logEntry);
    System.out.println(logEntry);
  }

  // Method to retrieve log history
  public java.util.List<String> getLogHistory() {
    return logHistory;
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Logger logger1 = Logger.getInstance();
    Logger logger2 = Logger.getInstance();

    System.out.println(logger1 == logger2); // Output: true, both references point to the same instance

    logger1.log("User logged in");
    logger2.log("Data saved to database");

    System.out.println(logger1.getLogHistory());
  }
}

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
