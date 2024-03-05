class Level1Support {
  constructor() {
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(request) {
    if (request.includes('basic')) {
      return 'Level 1 Support: Issue resolved at basic level.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

class Level2Support {
  constructor() {
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(request) {
    if (request.includes('advanced')) {
      return 'Level 2 Support: Issue resolved at advanced level.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    } else {
      return null; // No more handlers in the chain
    }
  }
}

class Level3Support {
  constructor() {
    this.nextHandler = null; // Level 3 does not technically need this, but added for consistency
  }

  handleRequest(request) {
    if (request.includes('bug')) {
      return 'Level 3 Support: Issue resolved at development level.';
    } else {
      return 'Level 3 Support: Unable to resolve the issue.';
    }
  }

  setNextHandler() {
    throw new Error('Level 3 Support is the highest level and does not have a next handler.');
  }
}

// Client code
function main() {
  const level1 = new Level1Support();
  const level2 = new Level2Support();
  const level3 = new Level3Support();

  level1.setNextHandler(level2);
  level2.setNextHandler(level3);

  console.log(level1.handleRequest('Fix basic login issue')); // Output: Level 1 Support: Issue resolved at basic level.
  console.log(level1.handleRequest('Debug advanced performance problem')); // Output: Level 2 Support: Issue resolved at advanced level.
  console.log(level1.handleRequest('Investigate bug causing application crash')); // Output: Level 3 Support: Issue resolved at development level.
}

main();


/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support
 * ticket system. The SupportHandler interface defines the contract for handling support
 * requests, and concrete implementations (Level1Support, Level2Support, and Level3Support)
 * represent different levels of support. Each handler decides whether it can handle a
 * request or should pass it to the next handler in the chain.
 */
