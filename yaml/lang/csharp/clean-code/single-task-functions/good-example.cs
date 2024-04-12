using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        // Example usage
        const string input = "first line\nsecond line\nthird line";
        ProcessData(input);
    }

    static string[] SplitIntoLines(string text)
    {
        // Splits the text into lines
        return text.Split('\n');
    }

    static IEnumerable<string> ProcessLines(IEnumerable<string> lines)
    {
        // Imagine complex processing here
        // Converts each line to uppercase
        return lines.Select(line => line.ToUpper());
    }

    static void PrintLines(IEnumerable<string> lines)
    {
        // Prints the lines to the console
        foreach (var line in lines)
        {
            Console.WriteLine(line);
        }
    }

    static void ProcessData(string input)
    {
        // Processes the input string
        var lines = SplitIntoLines(input);
        var processedLines = ProcessLines(lines);
        PrintLines(processedLines);
    }
}