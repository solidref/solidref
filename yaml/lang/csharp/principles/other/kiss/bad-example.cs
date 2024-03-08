using System;

class Program
{
    static void Main(string[] args)
    {
        // there is no need for absolute value here
        bool isEven = IsEven(4);
        Console.WriteLine(isEven);
    }

    static bool IsEven(int num)
    {
        return num % 2 == 0;
    }
}