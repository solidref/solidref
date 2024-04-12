public class DistanceCalculator {

    // Calculates the distance based on speed and time.
    // Returns -1 if speed or time is negative.
    public static double calculateDistance(double speed, double time) {
        if (speed < 0 || time < 0) {
            return -1;
        }
        return speed * time;
    }

    public static void main(String[] args) {
        // Example usage
        double distance = calculateDistance(10, 5);
        if (distance >= 0) {
            System.out.println("The distance is: " + distance);
        } else {
            System.out.println("Invalid input values for speed or time.");
        }
    }
}