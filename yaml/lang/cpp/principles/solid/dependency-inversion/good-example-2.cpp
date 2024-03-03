// Good: High-level module and low-level module depend on an abstraction.
class IStorage {
public:
  virtual void save(const std::string &data) = 0;
};

class FileStorage : public IStorage {
public:
  void save(const std::string &data) override {
    // Save data to a file
  }
};

class CloudStorage : public IStorage {
public:
  void save(const std::string &data) override {
    // Save data to the cloud
  }
};

class Logger {
  IStorage *storage;

public:
  Logger(IStorage *s) : storage(s) {}
  void log(const std::string &message) { storage->save(message); }
};
