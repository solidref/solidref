using System;

class Program
{
    // Subtract subtrahend from minuend and return the result
    static int Subtract(int minuend, int subtrahend)
    {
        return minuend - subtrahend;
    }

    static void Main(string[] args)
    {
        int result = Subtract(10, 5);
        Console.WriteLine(result);
    }
}