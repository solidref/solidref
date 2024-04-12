using System;

class Program
{
    static void Main(string[] args)
    {
        try
        {
            int result = ParseUserInput("1024");
            Console.WriteLine("Parsed input: " + result);
        }
        catch (Exception error)
        {
            Console.Error.WriteLine("Failed to parse input: " + error.Message);
        }
    }

    // A function that attempts to parse a string into a number.
    // Throws an exception if the input cannot be parsed.
    private static int ParseUserInput(string input)
    {
        bool success = int.TryParse(input, out int result);
        if (!success)
        {
            // Instead of using isNaN like in JavaScript, C# uses TryParse pattern and checks success flag.
            throw new Exception("Input cannot be parsed to a number.");
        }
        return result;
    }
}