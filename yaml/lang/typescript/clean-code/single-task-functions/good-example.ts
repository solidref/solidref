function splitIntoLines(text: string): string[] {
  return text.split('\n');
}

function processLines(lines: string[]): string[] {
  // Imagine complex processing here
  return lines.map((line) => line.toUpperCase());
}

function printLines(lines: string[]): void {
  console.log(lines);
}

function processData(input: string): void {
  const lines = splitIntoLines(input);
  const processedLines = processLines(lines);
  printLines(processedLines);
}
