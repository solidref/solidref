public static class DistanceCalculator
{
    // Calculates distance based on speed and time.
    // speed: the speed of the moving object in units per hour
    // time: the time travelled in hours
    // Returns the distance travelled as an integer.
    // Returns -1 if either speed or time is negative, indicating an error.
    public static double CalculateDistance(double speed, double time)
    {
        if (speed < 0 || time < 0)
        {
            return -1;
        }

        return speed * time;
    }
}