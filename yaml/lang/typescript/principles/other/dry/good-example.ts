// Using default parameters and arrow functions for repeated logic
const addTax = (price: number, rate: number = 0.05): number => price + (price * rate);
