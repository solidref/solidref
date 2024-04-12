function parseUserInput(input) {
  // Attempt to parse input
  const number = parseInt(input);
  // Check for NaN to determine if parsing failed
  if (isNaN(number)) {
    return 'error'; // Return 'error' if parsing fails
  }
  return number; // Return parsed number on success
}

const result = parseUserInput('1024');
if (result === 'error') {
  console.error('Failed to parse input.'); // Log error on failure
} else {
  console.log('Parsed input:', result); // Log success
}