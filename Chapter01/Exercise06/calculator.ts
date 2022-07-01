enum Operator {
  Add = "add",
  Substract = "substract",
  Multiply = "multiply",
  Divide = "divide",
}

type Operation = (x: number, y: number) => number;
const operations: [Operator, Operation][] = [];

const add = function (first: number, second: number) {
  return first + second;
};
const substract = function (first: number, second: number) {
  return first - second;
};
const multiply = function (first: number, second: number) {
  return first * second;
};
const divide = function (first: number, second: number) {
  return first / second;
};

operations.push([Operator.Add, add]);
operations.push([Operator.Substract, substract]);
operations.push([Operator.Multiply, multiply]);
operations.push([Operator.Divide, divide]);

const calculator = function (first: number, second: number, op: Operator) {
  const tuple = operations.find((tpl) => tpl[0] === op);
  const operation = tuple[1];
  const result = operation(first, second);
  return result;
};

console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Substract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
