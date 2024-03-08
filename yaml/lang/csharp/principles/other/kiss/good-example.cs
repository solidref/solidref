using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(IsEven(10)); // Outputs: True
        Console.WriteLine(IsEven(5));  // Outputs: False
    }

    // Determines if a number is even
    static bool IsEven(int num)
    {
        return num % 2 == 0;
    }
}