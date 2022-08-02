function Token(hasToken: boolean) {
  return function (constructor: Function) {
    constructor.prototype.token = hasToken;
  };
}

@Token(true)
class Teacher {
  constructor(public id: number, public name: string) {}
  // teacher specific code
}

const teacher = new Teacher(1, "John Smith");
console.log("Does the teacher have a token? ", teacher["token"]);

@Token(false)
class Student {
  constructor(public id: number, public name: string) {}
  // student specific code
}

type Constructable = { new (...args: any[]): {} };

function Token(hasToken: boolean) {
  return function <T extends Constructable>(constructor: T) {
    return class extends constructor {
      token: boolean = hasToken;
    };
  };
}

const student = new Student(101, "John Bender");
console.log("Does the student have a token? ", student["token"]);
