using System;
using System.Collections.Generic;

public class Logger
{
    private static Logger instance;
    private List<string> logHistory = new List<string>();

    // Private constructor to prevent instantiation from outside the class
    private Logger() { }

    // Static method to retrieve the singleton instance
    public static Logger GetInstance()
    {
        if (instance == null)
        {
            instance = new Logger();
        }
        return instance;
    }

    // Method to log messages
    public void Log(string message)
    {
        var timestamp = DateTime.UtcNow.ToString("o"); // ISO 8601 format
        var logEntry = $"[{timestamp}] {message}";
        logHistory.Add(logEntry);
        Console.WriteLine(logEntry);
    }

    // Method to retrieve log history
    public List<string> GetLogHistory()
    {
        return logHistory;
    }
}

// Client code
public class Program
{
    public static void Main(string[] args)
    {
        var logger1 = Logger.GetInstance();
        var logger2 = Logger.GetInstance();

        Console.WriteLine(logger1 == logger2); // Output: True, both references point to the same instance

        logger1.Log("User logged in");
        logger2.Log("Data saved to database");

        logger1.GetLogHistory().ForEach(Console.WriteLine);
    }
}

/*
 * The Logger class has a private static instance property that holds the single instance of the logger.
 *
 * The constructor is made private to prevent instantiation from outside the class.
 *
 * The GetInstance() method is a static method that returns the singleton instance of the logger. It
 * ensures that only one instance of the logger is created throughout the application.
 *
 * The Log() method logs a message along with a timestamp and adds the log entry to the logHistory list.
 *
 * The GetLogHistory() method retrieves the log history.
 *
 * In the client code, both logger1 and logger2 references point to the same instance of the logger
 * obtained using the GetInstance() method.
 *
 * Logging messages using either logger1 or logger2 will result in consistent logging behavior, and the
 * log history can be retrieved from either instance.
 */