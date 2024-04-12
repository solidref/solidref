public class ArithmeticOperations {

    /**
     * Subtract subtrahend from minuend and return the result.
     *
     * @param minuend    the value to be subtracted from
     * @param subtrahend the value to subtract
     * @return the result of subtraction
     */
    public static int subtract(int minuend, int subtrahend) {
        return minuend - subtrahend;
    }
    
    public static void main(String[] args) {
        int result = subtract(10, 5);
        System.out.println("Result: " + result); // This outputs: Result: 5
    }
}