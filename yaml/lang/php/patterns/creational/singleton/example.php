```php
<?php

class Logger {
    private static $instance;
    private $logHistory = [];

    // Private constructor to prevent instantiation from outside the class
    private function __construct() {}

    // Static method to retrieve the singleton instance
    public static function getInstance(): Logger {
        if (!self::$instance) {
            self::$instance = new Logger();
        }
        return self::$instance;
    }

    // Method to log messages
    public function log(string $message): void {
        $timestamp = new \DateTime();
        $logEntry = '[' . $timestamp->format(DateTimeInterface::ATOM) . '] ' . $message;
        $this->logHistory[] = $logEntry;
        echo $logEntry . PHP_EOL;
    }

    // Method to retrieve log history
    public function getLogHistory(): array {
        return $this->logHistory;
    }
}

// Client code
$logger1 = Logger::getInstance();
$logger2 = Logger::getInstance();

echo ($logger1 === $logger2) ? 'true' : 'false'; // Output: true, both references point to the same instance
echo PHP_EOL;

$logger1->log("User logged in");
$logger2->log("Data saved to database");

print_r($logger1->getLogHistory());

/**
 * The Logger class has a private static $instance property that holds the single instance of the logger.
 *
 * The constructor is made private to prevent instantiation from outside the class.
 *
 * The getInstance() method is a static method that returns the singleton instance of the logger. It
 * ensures that only one instance of the logger is created throughout the application.
 *
 * The log() method logs a message along with a timestamp and adds the log entry to the $logHistory array.
 *
 * The getLogHistory() method retrieves the log history.
 *
 * In the client code, both $logger1 and $logger2 references point to the same instance of the logger
 * obtained using the getInstance() method.
 *
 * Logging messages using either $logger1 or $logger2 will result in consistent logging behavior, and the
 * log history can be retrieved from either instance.
 */
```