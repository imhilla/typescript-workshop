// const values = [8, 42, 99, 161];
// let total = 0;
// for (let i = 0; i < values.length; ++i) {
//   total += values[i];
// }
// const average = total / values.length;
// console.log(average);
// npx ts-node filename.ts
var calcAverage = function (values) {
    return values.reduce(function (prev, curr) { return prev + curr; }, 0) / values.length;
};
var values = [8, 42, 99, 161];
var average = calcAverage(values);
console.log(average);
