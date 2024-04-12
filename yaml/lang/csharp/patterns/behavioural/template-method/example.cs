using System;

abstract class Breakfast
{
    // Template method
    public void Prepare()
    {
        BoilWater();
        AddIngredients();
        Cook();
        Serve();
    }

    // Abstract methods to be implemented by subclasses
    public abstract void AddIngredients();
    public abstract void Cook();

    // Concrete methods
    public void BoilWater()
    {
        Console.WriteLine("Boiling water...");
    }

    public void Serve()
    {
        Console.WriteLine("Breakfast is served!");
    }
}

class OmeletteBreakfast : Breakfast
{
    public override void AddIngredients()
    {
        Console.WriteLine("Adding eggs, cheese, and vegetables to the pan.");
    }

    public override void Cook()
    {
        Console.WriteLine("Cooking the omelette until golden brown.");
    }
}

class PancakeBreakfast : Breakfast
{
    public override void AddIngredients()
    {
        Console.WriteLine("Mixing flour, eggs, milk, and sugar to make the batter.");
    }

    public override void Cook()
    {
        Console.WriteLine("Pouring the batter onto the griddle and flipping until cooked.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Preparing Omelette Breakfast:");
        Breakfast omeletteBreakfast = new OmeletteBreakfast();
        omeletteBreakfast.Prepare();

        Console.WriteLine("\nPreparing Pancake Breakfast:");
        Breakfast pancakeBreakfast = new PancakeBreakfast();
        pancakeBreakfast.Prepare();
    }
}
