<?php

// This function calculates the distance by multiplying speed with time.
// It returns -1 if either speed or time is negative, indicating an error.
function calculateDistance($speed, $time) {
    if ($speed < 0 || $time < 0) {
        return -1;
    }
    return $speed * $time;
}

?>