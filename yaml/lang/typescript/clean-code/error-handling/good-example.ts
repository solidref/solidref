function parseUserInput(input: string): number {
  const result = parseInt(input);
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
