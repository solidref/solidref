using System;

// Abstract Factory interface
interface IFurnitureFactory
{
    IChair CreateChair();
    ITable CreateTable();
}

// Concrete Factory 1: Modern Furniture Factory
class ModernFurnitureFactory : IFurnitureFactory
{
    public IChair CreateChair()
    {
        return new ModernChair();
    }

    public ITable CreateTable()
    {
        return new ModernTable();
    }
}

// Concrete Factory 2: Vintage Furniture Factory
class VintageFurnitureFactory : IFurnitureFactory
{
    public IChair CreateChair()
    {
        return new VintageChair();
    }

    public ITable CreateTable()
    {
        return new VintageTable();
    }
}

// Abstract Product: Chair
interface IChair
{
    void SitOn();
}

// Concrete Product: Modern Chair
class ModernChair : IChair
{
    public void SitOn()
    {
        Console.WriteLine("Sitting on a modern chair.");
    }
}

// Concrete Product: Vintage Chair
class VintageChair : IChair
{
    public void SitOn()
    {
        Console.WriteLine("Sitting on a vintage chair.");
    }
}

// Abstract Product: Table
interface ITable
{
    void PutOn();
}

// Concrete Product: Modern Table
class ModernTable : ITable
{
    public void PutOn()
    {
        Console.WriteLine("Putting something on a modern table.");
    }
}

// Concrete Product: Vintage Table
class VintageTable : ITable
{
    public void PutOn()
    {
        Console.WriteLine("Putting something on a vintage table.");
    }
}

class Client
{
    // Client code
    public static void CreateFurniture(IFurnitureFactory factory)
    {
        var chair = factory.CreateChair();
        var table = factory.CreateTable();

        Console.WriteLine("Created furniture:");
        chair.SitOn();
        table.PutOn();
    }

    static void Main()
    {
        // Creating modern furniture
        Console.WriteLine("Creating modern furniture:");
        CreateFurniture(new ModernFurnitureFactory());

        // Creating vintage furniture
        Console.WriteLine("\nCreating vintage furniture:");
        CreateFurniture(new VintageFurnitureFactory());
    }
}