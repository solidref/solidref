public class DistanceCalculator
{
    // Calculates and returns the distance based on speed and time
    public static double CalculateDistance(double speed, double time)
    {
        // If speed or time is negative, return -1 indicating an error
        if (speed < 0 || time < 0)
        {
            return -1;
        }

        // Otherwise, return the product of speed and time as the distance
        return speed * time;
    }
}