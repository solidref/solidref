func parseUserInput(input string) (int, error) {
    // Attempt to convert the string to an integer
    i, err := strconv.Atoi(input)
    if err != nil {
        // Return a default value and an error if the conversion fails
        return 0, errors.New("error")
    }
    // Return the converted integer and no error on success
    return i, nil
}

func main() {
    result, err := parseUserInput("1024")
    if err != nil {
        // Handle the error case
        log.Println("Failed to parse input.")
    } else {
        // Handle the success case
        fmt.Println("Parsed input:", result)
    }
}