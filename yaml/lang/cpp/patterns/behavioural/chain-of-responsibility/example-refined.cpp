#include <iostream>
#include <memory> // For std::shared_ptr and std::make_shared
#include <string>

// Abstract Handler: Defines an interface for handling requests and setting the
// successor in the chain
class Handler {
public:
  virtual ~Handler() {}

  // Set the next handler in the chain
  virtual void setNext(std::shared_ptr<Handler> handler) = 0;

  // Handle request, to be implemented by concrete handlers
  virtual std::string handle(const std::string &request) = 0;
};

// Concrete Handler 1
class ConcreteHandler1 : public Handler {
private:
  std::shared_ptr<Handler> nextHandler;

public:
  void setNext(std::shared_ptr<Handler> handler) override {
    nextHandler = handler;
  }

  std::string handle(const std::string &request) override {
    // Check if this handler can handle the request
    if (request == "Operation1") {
      return "ConcreteHandler1 handled the request";
    } else if (nextHandler) { // Pass to the next handler in the chain
      return nextHandler->handle(request);
    } else {
      return "Request not handled";
    }
  }
};

// Concrete Handler 2
class ConcreteHandler2 : public Handler {
private:
  std::shared_ptr<Handler> nextHandler;

public:
  void setNext(std::shared_ptr<Handler> handler) override {
    nextHandler = handler;
  }

  std::string handle(const std::string &request) override {
    if (request == "Operation2") {
      return "ConcreteHandler2 handled the request";
    } else if (nextHandler) {
      return nextHandler->handle(request);
    } else {
      return "Request not handled";
    }
  }
};

// Example usage
int main() {
  // Creating the handlers
  auto handler1 = std::make_shared<ConcreteHandler1>();
  auto handler2 = std::make_shared<ConcreteHandler2>();

  // Setting up the chain: Handler1 -> Handler2
  handler1->setNext(handler2);

  // Making requests
  std::string request1 = "Operation2";
  std::cout << handler1->handle(request1) << std::endl;

  std::string request2 = "UnknownOperation";
  std::cout << handler1->handle(request2) << std::endl;

  return 0;
}

/**
 * Abstract Handler (Handler): This abstract base class declares the setNext
 * method for chaining handlers and the handle method for processing requests.
 * Concrete handlers must implement these methods.
 *
 * Concrete Handlers (ConcreteHandler1, ConcreteHandler2): These classes
 * implement the handling behavior for specific requests. If a handler cannot
 * process a request, it passes the request along the chain.
 *
 * Chain Setup: The main function demonstrates how to link handlers into a chain
 * (handler1 is linked to handler2). The chain can be extended easily by adding
 * more handlers and linking them together.
 *
 * Request Handling: Requests are passed to the first handler in the chain. Each
 * handler decides either to process the request or to pass it along to the next
 * handler in the chain.
 *
 * Flexibility and Decoupling: The Chain of Responsibility pattern allows for
 * the dynamic addition or removal of handlers from the chain, promoting
 * flexibility and decoupling the sender of a request from its receivers.
 */
