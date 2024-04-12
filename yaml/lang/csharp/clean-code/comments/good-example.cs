using System;

class Program
{
    // Adjusts for the time zone difference in GMT
    public static int AdjustForTimezone(int timestamp)
    {
        const int HOUR = 3600;
        return timestamp + HOUR * 5;
    }

    static void Main(string[] args)
    {
        // Example usage
        int timestamp = 1625097600; // Example timestamp
        int adjustedTimestamp = AdjustForTimezone(timestamp);
        Console.WriteLine($"Adjusted Timestamp: {adjustedTimestamp}");
    }
}