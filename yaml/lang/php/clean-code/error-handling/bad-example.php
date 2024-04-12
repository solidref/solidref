<?php

function parseUserInput($input) {
    // Attempt to parse the input
    $result = filter_var($input, FILTER_VALIDATE_INT);
    
    if ($result === false) {
        // If parsing fails, return 'error'
        return 'error';
    } else {
        // If parsing succeeds, return the parsed integer
        return (int)$input;
    }
}

$result = parseUserInput('1024');
if ($result === 'error') {
    // Handle the error case
    error_log('Failed to parse input.');
} else {
    // Handle the success case
    echo 'Parsed input: ' . $result;
}

?>