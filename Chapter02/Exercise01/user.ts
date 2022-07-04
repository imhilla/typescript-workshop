/// <reference path="./types/AuthTypes.d.ts"/>
import * as auth from "AuthTypes";
let jon: auth.User;
jon = {
  email: "jon@snow.com",
  roles: ["admin"],
};

let alice: auth.User;
alice = {
  email: "alice@snow.com",
  roles: ["super_admin"],
  source: "facebook",
};
