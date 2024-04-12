def calculate_distance(speed, time):
    # Check for negative inputs, return -1 if any
    if speed < 0 or time < 0:
        return -1
    # Calculate and return distance
    return speed * time