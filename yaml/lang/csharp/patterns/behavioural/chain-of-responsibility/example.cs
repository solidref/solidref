using System;

public interface ISupportHandler
{
    void SetNextHandler(ISupportHandler handler);
    string HandleRequest(string request);
}

public class Level1Support : ISupportHandler
{
    private ISupportHandler nextHandler = null;

    public void SetNextHandler(ISupportHandler handler)
    {
        this.nextHandler = handler;
    }

    public string HandleRequest(string request)
    {
        if (request.Contains("basic"))
        {
            return "Level 1 Support: Issue resolved at basic level.";
        }
        else if (this.nextHandler != null)
        {
            return this.nextHandler.HandleRequest(request);
        }
        else
        {
            return null; // No more handlers in the chain
        }
    }
}

public class Level2Support : ISupportHandler
{
    private ISupportHandler nextHandler = null;

    public void SetNextHandler(ISupportHandler handler)
    {
        this.nextHandler = handler;
    }

    public string HandleRequest(string request)
    {
        if (request.Contains("advanced"))
        {
            return "Level 2 Support: Issue resolved at advanced level.";
        }
        else if (this.nextHandler != null)
        {
            return this.nextHandler.HandleRequest(request);
        }
        else
        {
            return null; // No more handlers in the chain
        }
    }
}

public class Level3Support : ISupportHandler
{
    public string HandleRequest(string request)
    {
        if (request.Contains("bug"))
        {
            return "Level 3 Support: Issue resolved at development level.";
        }
        else
        {
            return "Level 3 Support: Unable to resolve the issue.";
        }
    }

    public void SetNextHandler(ISupportHandler handler)
    {
        throw new Exception("Level 3 Support is the highest level and does not have a next handler.");
    }
}

class Program
{
    static void Main(string[] args)
    {
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

/*
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support 
 * ticket system. The ISupportHandler interface defines the contract for handling support 
 * requests, and concrete implementations (Level1Support, Level2Support, and Level3Support) 
 * represent different levels of support. Each handler decides whether it can handle a 
 * request or should pass it to the next handler in the chain.
 */