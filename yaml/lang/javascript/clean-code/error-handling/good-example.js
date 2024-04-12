function parseUserInput(input) {
  const result = parseInt(input);
  // Check if the parsing resulted in an NaN
  if (isNaN(result)) {
    throw new Error('Input cannot be parsed to a number.');
  }
  return result;
}

try {
  const result = parseUserInput('1024');
  console.log('Parsed input:', result);
} catch (error) {
  console.error('Failed to parse input:', error.message);
}