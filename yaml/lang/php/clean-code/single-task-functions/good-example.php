<?php

// Splits the input text into an array of lines
function splitIntoLines(string $text): array {
    return explode("\n", $text);
}

// Processes each line with complex processing, here simply converts to uppercase
function processLines(array $lines): array {
    // Imagine complex processing here
    return array_map(function($line) {
        return strtoupper($line);
    }, $lines);
}

// Prints all lines
function printLines(array $lines): void {
    foreach ($lines as $line) {
        echo $line . PHP_EOL;
    }
}

// Main function to process the data
function processData(string $input): void {
    $lines = splitIntoLines($input);
    $processedLines = processLines($lines);
    printLines($processedLines);
}

?>