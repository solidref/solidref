def parse_user_input(input_string):
    # Try parsing the input string to an integer
    try:
        result = int(input_string)
    except ValueError:
        # If parsing fails, raise an error with a meaningful message
        raise ValueError('Input cannot be parsed to a number.')
    return result

try:
    result = parse_user_input('1024')
    print('Parsed input:', result)
except ValueError as error:
    print('Failed to parse input:', error)