using System;

class Bird
{
    public virtual void Fly()
    {
        Console.WriteLine("Bird is flying");
    }
}

class Duck : Bird
{
    public void Quack()
    {
        Console.WriteLine("Duck is quacking");
    }
}

class Goose : Bird
{
    public void Swim()
    {
        // Fixed the output message to align with class context
        Console.WriteLine("Goose is swimming");
    }
}

class Program
{
    static void MakeBirdFly(Bird bird)
    {
        bird.Fly();
    }

    static void Main(string[] args)
    {
        Duck duck = new Duck();
        Goose goose = new Goose();

        MakeBirdFly(duck);    // Output: Bird is flying
        MakeBirdFly(goose);   // Output: Bird is flying
    }
}