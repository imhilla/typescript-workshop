var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Substract"] = "substract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
})(Operator || (Operator = {}));
var operations = [];
var add = function (first, second) {
    return first + second;
};
var substract = function (first, second) {
    return first - second;
};
var multiply = function (first, second) {
    return first * second;
};
var divide = function (first, second) {
    return first / second;
};
operations.push([Operator.Add, add]);
operations.push([Operator.Substract, substract]);
operations.push([Operator.Multiply, multiply]);
operations.push([Operator.Divide, divide]);
var calculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operation = tuple[1];
    var result = operation(first, second);
    return result;
};
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Substract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
