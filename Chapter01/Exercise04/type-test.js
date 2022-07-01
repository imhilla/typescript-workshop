var daysInWeek = 7;
var name = "Ada Lovelace";
var isRaining = false;
var today = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var calculator = {
    add: add
};
var everything = [
    daysInWeek,
    name,
    isRaining,
    today,
    months,
    notDefined,
    add,
    calculator,
    nothing
];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var something = everything_1[_i];
    var type = typeof something;
    console.log(something, type);
}
