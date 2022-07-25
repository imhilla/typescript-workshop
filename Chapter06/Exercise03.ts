type User = {
  _id: number;
  email: string;
  token: string;
};

type Admin = {
  accessPages: string[];
  lastLogin: Date;
};

type BackUp = {
  lastBackUp: Date;
  backUpLocation: string;
};

const superUser: User & Admin = {
  _id: 1,
  email: "james@gmail.com",
  token: "123",
  accessPages: ["profile", "adminConsole", " userReset"],
  lastLogin: new Date(),
};

type BackUpUser = User & BackUp;
const backUpUser: BackUpUser = {
  _id: 1,
  email: "james@gmail.com",
  token: "123",
  lastBackUp: new Date(),
  backUpLocation: "./sdsdsd",
};

type Age = number | string;
function myAge(age: Age) {
  if (typeof age === "number") {
    return `my age is ${age} and this a number`;
  } else if (typeof age === "string") {
    return `my age is ${age} and this a string`;
  } else {
    return `incorrect type ${typeof age}`;
  }
}
