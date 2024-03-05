public class NumberUtils {
    // there is no need for absolute value here
    public static boolean isEven(int num) {
        return num % Math.abs(2) == 0;
    }
}


