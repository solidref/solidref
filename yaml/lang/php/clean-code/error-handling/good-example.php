<?php

function parseUserInput($input) {
    $result = (int) $input;
    if (!is_numeric($input)) { // Check if input is numeric
        throw new Exception('Input cannot be parsed to a number.');
    }
    return $result;
}

try {
    $result = parseUserInput('1024');
    echo 'Parsed input: ' . $result . PHP_EOL;
} catch (Exception $error) {
    echo 'Failed to parse input: ' . $error->getMessage() . PHP_EOL;
}

?>