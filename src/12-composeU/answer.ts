// Write a function `composeU` that takes two unary functions and returns a function that calls them both
// composeU(double, square)(5) //=> 100
export const composeU = (f: Unary, g: Unary): Unary => (x): number => g(f(x));
