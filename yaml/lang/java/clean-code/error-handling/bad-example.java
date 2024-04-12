public class Main {
    public static void main(String[] args) {
        int result = parseUserInput("1024");
        if (result == -1) {
            System.err.println("Failed to parse input.");
        } else {
            System.out.println("Parsed input: " + result);
        }
    }

    // This function tries to parse a string into an integer. If it fails, it returns -1.
    // Returning -1 to indicate error is a common practice in languages like C, 
    // but in Java, throwing an exception could be more idiomatic.
    // For the purpose of staying true to the original request while being simple, -1 is used.
    public static int parseUserInput(String input) {
        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException e) {
            return -1; // Using -1 to indicate error, as Java does not support returning multiple types like TypeScript.
        }
    }
}