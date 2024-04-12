using System;

public interface ISupportHandler {
    void SetNextHandler(ISupportHandler handler);
    string HandleRequest(string request);
}

public class Level1Support : ISupportHandler {
    private ISupportHandler nextHandler;

    public void SetNextHandler(ISupportHandler handler) {
        nextHandler = handler;
    }

    public string HandleRequest(string request) {
        if (request.Contains("basic")) {
            return "Level 1 Support: Issue resolved at basic level.";
        } else if (nextHandler != null) {
            return nextHandler.HandleRequest(request);
        } else {
            return null; // No more handlers in the chain
        }
    }
}

public class Level2Support : ISupportHandler {
    private ISupportHandler nextHandler;

    public void SetNextHandler(ISupportHandler handler) {
        nextHandler = handler;
    }

    public string HandleRequest(string request) {
        if (request.Contains("advanced")) {
            return "Level 2 Support: Issue resolved at advanced level.";
        } else if (nextHandler != null) {
            return nextHandler.HandleRequest(request);
        } else {
            return null; // No more handlers in the chain
        }
    }
}

public class Level3Support : ISupportHandler {
    public string HandleRequest(string request) {
        if (request.Contains("bug")) {
            return "Level 3 Support: Issue resolved at development level.";
        } else {
            return "Level 3 Support: Unable to resolve the issue.";
        }
    }

    // Level 3 support does not have a next handler
    public void SetNextHandler(ISupportHandler handler) {
        throw new Exception("Level 3 Support is the highest level and does not have a next handler.");
    }
}

class Program {
    static void Main() {
        // Create instances of support handlers
        var level1 = new Level1Support();
        var level2 = new Level2Support();
        var level3 = new Level3Support();

        // Chain the handlers together
        level1.SetNextHandler(level2);
        level2.SetNextHandler(level3);

        // Simulate support requests
        var request1 = "Fix basic login issue";
        var request2 = "Debug advanced performance problem";
        var request3 = "Investigate bug causing application crash";

        // Process requests through the chain of responsibility
        Console.WriteLine(level1.HandleRequest(request1)); // Output: Level 1 Support: Issue resolved at basic level.
        Console.WriteLine(level1.HandleRequest(request2)); // Output: Level 2 Support: Issue resolved at advanced level.
        Console.WriteLine(level1.HandleRequest(request3)); // Output: Level 3 Support: Issue resolved at development level.
    }
}