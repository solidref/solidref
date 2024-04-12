using System;

public class Bird
{
    public virtual void Fly()
    {
        Console.WriteLine("Bird is flying");
    }
}

public class Duck : Bird
{
    public void Quack()
    {
        Console.WriteLine("Duck is quacking");
    }
}

public class Goose : Bird
{
    // Correcting the apparent mistake in original example's Goose class comment to match the class functionality
    public void Swim()
    {
        Console.WriteLine("Goose is swimming");
    }
}

public class Program
{
    public static void MakeBirdFly(Bird bird)
    {
        bird.Fly();
    }

    static void Main()
    {
        Bird duck = new Duck();
        Bird goose = new Goose(); // Goose better represents the intended polymorphic behavior for a generic "Bird" example

        MakeBirdFly(duck);    // Output: Bird is flying
        MakeBirdFly(goose);   // Output: Bird is flying
    }
}