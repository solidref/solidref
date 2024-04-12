public class Main {
    public static void main(String[] args) {
        try {
            int result = parseUserInput("1024");
            System.out.println("Parsed input: " + result);
        } catch (Exception error) {
            System.err.println("Failed to parse input: " + error.getMessage());
        }
    }

    /**
     * Parses the user input to an integer.
     * Throws an error if the input cannot be parsed.
     *
     * @param input The user input as a string.
     * @return The parsed number as an integer.
     */
    public static int parseUserInput(String input) {
        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Input cannot be parsed to a number.");
        }
    }
}