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
