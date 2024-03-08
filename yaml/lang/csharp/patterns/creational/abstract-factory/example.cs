using System;

// Abstract Factory interface
public interface IFurnitureFactory
{
    IChair CreateChair();
    ITable CreateTable();
}

// Concrete Factory 1: Modern Furniture Factory
public class ModernFurnitureFactory : IFurnitureFactory
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
public class VintageFurnitureFactory : IFurnitureFactory
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
public interface IChair
{
    void SitOn();
}

// Concrete Product: Modern Chair
public class ModernChair : IChair
{
    public void SitOn()
    {
        Console.WriteLine("Sitting on a modern chair.");
    }
}

// Concrete Product: Vintage Chair
public class VintageChair : IChair
{
    public void SitOn()
    {
        Console.WriteLine("Sitting on a vintage chair.");
    }
}

// Abstract Product: Table
public interface ITable
{
    void PutOn();
}

// Concrete Product: Modern Table
public class ModernTable : ITable
{
    public void PutOn()
    {
        Console.WriteLine("Putting something on a modern table.");
    }
}

// Concrete Product: Vintage Table
public class VintageTable : ITable
{
    public void PutOn()
    {
        Console.WriteLine("Putting something on a vintage table.");
    }
}

class Program
{
    static void CreateFurniture(IFurnitureFactory factory)
    {
        var chair = factory.CreateChair();
        var table = factory.CreateTable();

        Console.WriteLine("Created furniture:");
        chair.SitOn();
        table.PutOn();
    }

    static void Main(string[] args)
    {
        Console.WriteLine("Creating modern furniture:");
        CreateFurniture(new ModernFurnitureFactory());

        Console.WriteLine("\nCreating vintage furniture:");
        CreateFurniture(new VintageFurnitureFactory());
    }
}
// The FurnitureFactory interface declares methods for creating chairs and tables.
// Concrete factories (ModernFurnitureFactory and VintageFurnitureFactory) implement the
// FurnitureFactory interface to produce modern and vintage furniture, respectively.
// The Chair interface declares a method for sitting on a chair, and concrete chair classes
// (ModernChair and VintageChair) implement this interface.
// The Table interface declares a method for putting something on a table, and concrete table
// classes (ModernTable and VintageTable) implement this interface.
// The CreateFurniture function acts as a client and receives a FurnitureFactory as a parameter.
// It creates a chair and a table using the factory and then performs actions on the created furniture.