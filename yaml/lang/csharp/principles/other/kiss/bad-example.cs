using System;

namespace KISSExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(IsEven(4)); // true
            Console.WriteLine(IsEven(-3)); // false
        }

        // there is no need for absolute value here
        static bool IsEven(int num)
        {
            return num % 2 == 0;
        }
    }
}