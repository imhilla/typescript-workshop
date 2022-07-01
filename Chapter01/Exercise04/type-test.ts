const daysInWeek = 7;
const name = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const notDefined = undefined;
const nothing = null;
const add = (x: number, y: number) => x + y;
const calculator = {
  add,
};
const everything = [
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

for (const something of everything) {
  const type = typeof something;
  console.log(something, type);
}
