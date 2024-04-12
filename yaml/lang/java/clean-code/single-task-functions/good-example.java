public class DataProcessor {

    public static String[] splitIntoLines(String text) {
        return text.split("\n");
    }

    public static String[] processLines(String[] lines) {
        // Imagine complex processing here
        return Arrays.stream(lines)
                .map(String::toUpperCase)
                .toArray(String[]::new);
    }

    public static void printLines(String[] lines) {
        for(String line : lines) {
            System.out.println(line);
        }
    }

    public static void processData(String input) {
        String[] lines = splitIntoLines(input);
        String[] processedLines = processLines(lines);
        printLines(processedLines);
    }

    public static void main(String[] args) {
        // Example usage
        processData("Here is some\nmultiline text\nto be processed");
    }
}