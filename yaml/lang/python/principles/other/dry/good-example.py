# Using default parameters and arrow functions for repeated logic
def add_tax(price: float, rate: float = 0.05) -> float:
    return price + (price * rate)
