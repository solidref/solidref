def calculate_distance(speed, time):
    # Check if either speed or time is negative and return -1 if so
    if speed < 0 or time < 0:
        return -1
    # Calculate and return the distance
    return speed * time