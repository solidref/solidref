<?php

// Calculates distance based on speed and time
// Returns -1 if either speed or time is negative
function calculateDistance($speed, $time) {
    if ($speed < 0 || $time < 0) {
        return -1;
    }
    return $speed * $time;
}

?>