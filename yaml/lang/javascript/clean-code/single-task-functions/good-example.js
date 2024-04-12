function splitIntoLines(text) {
  // Split the input text into lines
  return text.split('\n');
}

function processLines(lines) {
  // Imagine complex processing here
  // Currently, just convert each line to uppercase
  return lines.map(line => line.toUpperCase());
}

function printLines(lines) {
  // Print the processed lines to the console
  lines.forEach(line => console.log(line));
}

function processData(input) {
  // Main function to process the input
  const lines = splitIntoLines(input); // Split input into lines
  const processedLines = processLines(lines); // Process each line
  printLines(processedLines); // Print processed lines
}