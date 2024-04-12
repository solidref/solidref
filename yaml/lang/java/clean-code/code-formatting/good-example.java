public class DistanceCalculator {
    /**
     * Calculates the distance based on speed and time.
     * If either speed or time is negative, returns -1 as error code.
     * 
     * @param speed the speed in units per hour
     * @param time the time in hours
     * @return the calculated distance or -1 if input is invalid
     */
    public static double calculateDistance(double speed, double time) {
        if (speed < 0 || time < 0) {
            return -1;
        }
        return speed * time;
    }

    public static void main(String[] args) {
        // Example usage
        double distance = calculateDistance(50, 2); // Should calculate the distance as 100
        System.out.println(distance);

        double invalidDistance = calculateDistance(-50, 2); // Should return -1 due to invalid inputs
        System.out.println(invalidDistance);
    }
}