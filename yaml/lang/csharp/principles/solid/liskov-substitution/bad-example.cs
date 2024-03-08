using System;

public class Bird
{
    public virtual void Fly()
    {
        // Implementation of fly for general birds
    }
}

public class Ostrich : Bird
{
    public override void Fly()
    {
        throw new InvalidOperationException("Can't fly"); // Ostrich, being a Bird, should not alter the expected behavior of the fly method
    }
}