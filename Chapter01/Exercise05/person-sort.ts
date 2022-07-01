interface Person {
  firstName: string;
  lastName: string;
}

let count = 0;
function getFullName(person: Person) {
  count++;
  return `${person.firstName} ${person.lastName}`;
}

const programmers: Person[] = [
  { firstName: "Donald", lastName: "Knuth" },
  { firstName: "Barbara", lastName: "Liskow" },
  { firstName: "Lars", lastName: "Bak" },
  { firstName: "Guido", lastName: "Van Rossum" },
  { firstName: "Anders", lastName: "Hejslberg" },
  { firstName: "Edsger", lastName: "Dijkstra" },
  { firstName: "Brandon", lastName: "Eich" },
];
