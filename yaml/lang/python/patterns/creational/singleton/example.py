class Logger:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Logger, cls).__new__(cls)
            cls._instance.logHistory = []
        return cls._instance

    def log(self, message):
        timestamp = datetime.datetime.now().isoformat()
        logEntry = f"[{timestamp}] {message}"
        self.logHistory.append(logEntry)
        print(logEntry)

    def getLogHistory(self):
        return self.logHistory

import datetime

# Client code
logger1 = Logger()
logger2 = Logger()

print(logger1 == logger2)  # Output: True, both references point to the same instance

logger1.log("User logged in")
logger2.log("Data saved to database")

print(logger1.getLogHistory())