def adjust_for_timezone(timestamp):
    # Adjusts for the time zone difference in GMT
    HOUR = 3600
    return timestamp + HOUR * 5