// SupportHandler.java
interface SupportHandler {
  void setNextHandler(SupportHandler handler);
  String handleRequest(String request);
}

// Level1Support.java
class Level1Support implements SupportHandler {
  private SupportHandler nextHandler;

  @Override
  public void setNextHandler(SupportHandler handler) {
    this.nextHandler = handler;
  }

  @Override
  public String handleRequest(String request) {
    if (request.contains("basic")) {
      return "Level 1 Support: Issue resolved at basic level.";
    } else if (this.nextHandler != null) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

// Level2Support.java
class Level2Support implements SupportHandler {
  private SupportHandler nextHandler;

  @Override
  public void setNextHandler(SupportHandler handler) {
    this.nextHandler = handler;
  }

  @Override
  public String handleRequest(String request) {
    if (request.contains("advanced")) {
      return "Level 2 Support: Issue resolved at advanced level.";
    } else if (this.nextHandler != null) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

// Level3Support.java
class Level3Support implements SupportHandler {
  @Override
  public String handleRequest(String request) {
    if (request.contains("bug")) {
      return "Level 3 Support: Issue resolved at development level.";
    } else {
      return "Level 3 Support: Unable to resolve the issue.";
    }
  }

  @Override
  public void setNextHandler(SupportHandler handler) {
    throw new UnsupportedOperationException("Level 3 Support is the highest level and does not have a next handler.");
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    // Create instances of support handlers
    Level1Support level1 = new Level1Support();
    Level2Support level2 = new Level2Support();
    Level3Support level3 = new Level3Support();

    // Chain the handlers together
    level1.setNextHandler(level2);
    level2.setNextHandler(level3);

    // Simulate support requests
    String request1 = "Fix basic login issue";
    String request2 = "Debug advanced performance problem";
    String request3 = "Investigate bug causing application crash";

    // Process requests through the chain of responsibility
    System.out.println(level1.handleRequest(request1)); // Output: Level 1 Support: Issue resolved at basic level.
    System.out.println(level1.handleRequest(request2)); // Output: Level 2 Support: Issue resolved at advanced level.
    System.out.println(level1.handleRequest(request3)); // Output: Level 3 Support: Issue resolved at development level.
  }
}


/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support
 * ticket system. The SupportHandler interface defines the contract for handling support
 * requests, and concrete implementations (Level1Support, Level2Support, and Level3Support)
 * represent different levels of support. Each handler decides whether it can handle a
 * request or should pass it to the next handler in the chain.
 */
