// Define the interface for a support handler
interface SupportHandler {
  setNextHandler(handler: SupportHandler): void;
  handleRequest(request: string): string | null;
}

// Concrete implementation of the SupportHandler interface for Level 1 support
class Level1Support implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNextHandler(handler: SupportHandler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: string): string | null {
    if (request.includes('basic')) {
      return 'Level 1 Support: Issue resolved at basic level.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

// Concrete implementation of the SupportHandler interface for Level 2 support
class Level2Support implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNextHandler(handler: SupportHandler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: string): string | null {
    if (request.includes('advanced')) {
      return 'Level 2 Support: Issue resolved at advanced level.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

// Concrete implementation of the SupportHandler interface for Level 3 support
class Level3Support implements SupportHandler {
  handleRequest(request: string): string | null {
    if (request.includes('bug')) {
      return 'Level 3 Support: Issue resolved at development level.';
    } else {
      return 'Level 3 Support: Unable to resolve the issue.';
    }
  }

  // Level 3 support does not have a next handler
  setNextHandler(handler: SupportHandler): void {
    throw new Error('Level 3 Support is the highest level and does not have a next handler.');
  }
}

// Client code
function main() {
  // Create instances of support handlers
  const level1 = new Level1Support();
  const level2 = new Level2Support();
  const level3 = new Level3Support();

  // Chain the handlers together
  level1.setNextHandler(level2);
  level2.setNextHandler(level3);

  // Simulate support requests
  const request1 = 'Fix basic login issue';
  const request2 = 'Debug advanced performance problem';
  const request3 = 'Investigate bug causing application crash';

  // Process requests through the chain of responsibility
  console.log(level1.handleRequest(request1)); // Output: Level 1 Support: Issue resolved at basic level.
  console.log(level1.handleRequest(request2)); // Output: Level 2 Support: Issue resolved at advanced level.
  console.log(level1.handleRequest(request3)); // Output: Level 3 Support: Issue resolved at development level.
}

/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support
 * ticket system. The SupportHandler interface defines the contract for handling support
 * requests, and concrete implementations (Level1Support, Level2Support, and Level3Support)
 * represent different levels of support. Each handler decides whether it can handle a
 * request or should pass it to the next handler in the chain.
 */
