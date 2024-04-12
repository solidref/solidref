def split_into_lines(text):
    return text.split('\n')

def process_lines(lines):
    # Imagine complex processing here
    return [line.upper() for line in lines]

def print_lines(lines):
    for line in lines:
        print(line)

def process_data(input):
    lines = split_into_lines(input)
    processed_lines = process_lines(lines)
    print_lines(processed_lines)