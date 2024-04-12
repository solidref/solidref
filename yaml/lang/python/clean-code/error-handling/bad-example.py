def parse_user_input(input_str):
    # Try to parse the input, return 'error' on failure
    try:
        return int(input_str)
    except ValueError:
        return 'error'

result = parse_user_input('1024')
if result == 'error':
    # Notify user of parsing failure
    print('Failed to parse input.')
else:
    # Inform user of successful parsing
    print('Parsed input:', result)