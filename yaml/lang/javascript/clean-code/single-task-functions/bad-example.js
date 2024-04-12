function processData(input) {
  const lines = input.split('\n');
  const result = lines.map(line => {
    // Imagine complex processing here
    return line.toUpperCase();
  });
  console.log(result);
}