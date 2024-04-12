<?php

function processData($input) {
    $lines = explode("\n", $input);
    $result = array_map(function($line) {
        // Imagine complex processing here
        return strtoupper($line);
    }, $lines);

    echo implode("\n", $result);
}

?>