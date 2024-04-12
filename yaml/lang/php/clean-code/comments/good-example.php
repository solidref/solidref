<?php

// Adjusts for the time zone difference in GMT
function adjustForTimezone($timestamp) {
    $HOUR = 3600;
    return $timestamp + $HOUR * 5;
}

?>