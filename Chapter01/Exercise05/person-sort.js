var count = 0;
function getFullName(person) {
    count++;
    return person.firstName + " " + person.lastName;
}
var programmers = [
    { firstName: "Donald", lastName: "Knuth" },
    { firstName: "Barbara", lastName: "Liskow" },
    { firstName: "Lars", lastName: "Bak" },
    { firstName: "Guido", lastName: "Van Rossum" },
    { firstName: "Anders", lastName: "Hejslberg" },
    { firstName: "Edsger", lastName: "Dijkstra" },
    { firstName: "Brandon", lastName: "Eich" },
];
// naive and straight foward sorting function
function naiveSortPersons(persons) {
    return persons.slice().sort(function (first, second) {
        var firstFullName = getFullName(first);
        var secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    });
}
function schwartzSortPersons(persons) {
    var tuples = persons.map(function (person) { return [
        person,
        getFullName(person),
    ]; });
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    var result = tuples.map(function (tuple) { return tuple[0]; });
    return result;
}
count = 0;
var sortedNaive = naiveSortPersons(programmers);
console.log("When called using the naive approach, the function was called " + count + " times");
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log("When called using the Schwartzian transform approach, the function was called " + count + " times");
