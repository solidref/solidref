// Bad: Logger directly depends on a specific storage mechanism.
class FileStorage {
public:
  void save(const std::string &data) {
    // Save data to a file
  }
};

class Logger {
  FileStorage storage;

public:
  void log(const std::string &message) { storage.save(message); }
};
