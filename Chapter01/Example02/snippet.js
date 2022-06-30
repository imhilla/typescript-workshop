function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "" + result.slice(0, lastSpace) + ellipsis;
    return result;
}
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(resultOne);
// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);
// const resultThree = snippet(false, 40);
// console.log(resultThree);
// const resultFour = snippet("Lorem ipsum dolor sit amet", false);
// console.log(resultFour);
// var resultFive: number = snippet("Lorem ipsum dolor sit amet", 20);
// console.log(resultFive);
