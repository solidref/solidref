public class TimezoneAdjuster {

    /**
     * Adjusts for the time zone difference in GMT.
     * 
     * @param timestamp The original timestamp.
     * @return The adjusted timestamp.
     */
    public static long adjustForTimezone(long timestamp) {
        final long HOUR = 3600;
        return timestamp + HOUR * 5;
    }
    
    public static void main(String[] args) {
        long originalTimestamp = System.currentTimeMillis() / 1000; // Get current times in seconds
        long adjustedTimestamp = adjustForTimezone(originalTimestamp);
        System.out.println("Adjusted Timestamp: " + adjustedTimestamp);
    }
}