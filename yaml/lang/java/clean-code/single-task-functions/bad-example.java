public class DataProcessor {
    public static void processData(String input) {
        String[] lines = input.split("\n");
        for (String line : lines) {
            // Imagine complex processing here
            String processedLine = line.toUpperCase();
            System.out.println(processedLine);
        }
    }

    public static void main(String[] args) {
        processData("Example input\nAnother line");
    }
}