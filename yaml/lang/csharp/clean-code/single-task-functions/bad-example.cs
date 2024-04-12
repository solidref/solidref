using System;

class Program
{
    static void Main(string[] args)
    {
        // Assuming input is provided as a command line argument
        if (args.Length > 0)
        {
            ProcessData(args[0]);
        }
    }

    static void ProcessData(string input)
    {
        string[] lines = input.Split('\n');
        foreach (var line in lines)
        {
            // Imagine complex processing here
            string processedLine = line.ToUpper();
            Console.WriteLine(processedLine);
        }
    }
}