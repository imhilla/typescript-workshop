// currying named after haskell brooks is the act of taking a function and breaking it
// down into individual functions with a single parameter

const addTwoNumbers = (a: number, b: number): number => a + b;
console.log(addTwoNumbers(3, 4));

// as currying
const addTwoNumbersCurrying =
  (a: number): ((b: number) => number) =>
  (b: number): number =>
    a + b;

console.log(addTwoNumbersCurrying(3)(4));

const addTwoNumbersR = (a: number): ((b: number) => number) => {
  return (b: number): number => {
    return a + b;
  };
};

const addFunction = addTwoNumbersR(3);

console.log(addFunction(4));
