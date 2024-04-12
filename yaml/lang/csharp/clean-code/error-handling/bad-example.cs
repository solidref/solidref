using System;

class Program
{
    // Function to parse user input. Returns an integer or the string 'error'
    static object ParseUserInput(string input)
    {
        try
        {
            return int.Parse(input);
        }
        catch
        {
            return "error";
        }
    }

    static void Main(string[] args)
    {
        var result = ParseUserInput("1024");
        if (result is string && (string)result == "error")
        {
            Console.Error.WriteLine("Failed to parse input.");
        }
        else
        {
            Console.WriteLine("Parsed input: " + result);
        }
    }
}