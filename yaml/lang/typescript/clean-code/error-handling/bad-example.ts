function parseUserInput(input: string): number | 'error' {
  try {
    return parseInt(input);
  } catch {
    return 'error';
  }
}

const result = parseUserInput('1024');
if (result === 'error') {
  console.error('Failed to parse input.');
} else {
  console.log('Parsed input:', result);
}
