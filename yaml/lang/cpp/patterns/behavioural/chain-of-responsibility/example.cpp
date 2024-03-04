#include <iostream>
#include <memory>
#include <string>

// Define the interface for a support handler
class SupportHandler {
public:
  virtual void setNextHandler(std::shared_ptr<SupportHandler> handler) = 0;
  virtual std::string handleRequest(const std::string &request) = 0;
  virtual ~SupportHandler() {}
};

// Concrete implementation of the SupportHandler interface for Level 1 support
class Level1Support : public SupportHandler {
private:
  std::shared_ptr<SupportHandler> nextHandler = nullptr;

public:
  void setNextHandler(std::shared_ptr<SupportHandler> handler) override {
    nextHandler = handler;
  }

  std::string handleRequest(const std::string &request) override {
    if (request.find("basic") != std::string::npos) {
      return "Level 1 Support: Issue resolved at basic level.";
    } else if (nextHandler != nullptr) {
      return nextHandler->handleRequest(request);
    } else {
      return "No more handlers in the chain";
    }
  }
};

// Concrete implementation of the SupportHandler interface for Level 2 support
class Level2Support : public SupportHandler {
private:
  std::shared_ptr<SupportHandler> nextHandler = nullptr;

public:
  void setNextHandler(std::shared_ptr<SupportHandler> handler) override {
    nextHandler = handler;
  }

  std::string handleRequest(const std::string &request) override {
    if (request.find("advanced") != std::string::npos) {
      return "Level 2 Support: Issue resolved at advanced level.";
    } else if (nextHandler != nullptr) {
      return nextHandler->handleRequest(request);
    } else {
      return "No more handlers in the chain";
    }
  }
};

// Concrete implementation of the SupportHandler interface for Level 3 support
class Level3Support : public SupportHandler {
public:
  std::string handleRequest(const std::string &request) override {
    if (request.find("bug") != std::string::npos) {
      return "Level 3 Support: Issue resolved at development level.";
    } else {
      return "Level 3 Support: Unable to resolve the issue.";
    }
  }

  void setNextHandler(std::shared_ptr<SupportHandler> /*handler*/) override {
    throw std::runtime_error("Level 3 Support is the highest level and does "
                             "not have a next handler.");
  }
};

// Example usage
int main() {
  auto level1 = std::make_shared<Level1Support>();
  auto level2 = std::make_shared<Level2Support>();
  auto level3 = std::make_shared<Level3Support>();

  level1->setNextHandler(level2);
  level2->setNextHandler(level3);

  std::cout << level1->handleRequest("Fix basic login issue") << std::endl;
  std::cout << level1->handleRequest("Debug advanced performance problem")
            << std::endl;
  std::cout << level1->handleRequest(
                   "Investigate bug causing application crash")
            << std::endl;

  return 0;
}

/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in
 * a support ticket system. The SupportHandler interface defines the contract
 * for handling support requests, and concrete implementations (Level1Support,
 * Level2Support, and Level3Support) represent different levels of support. Each
 * handler decides whether it can handle a request or should pass it to the next
 * handler in the chain.
 */
