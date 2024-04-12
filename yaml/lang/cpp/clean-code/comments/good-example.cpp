#include <iostream>

// Adjusts for the time zone difference in GMT
int adjustForTimezone(int timestamp) {
    const int HOUR = 3600;
    return timestamp + HOUR * 5;
}