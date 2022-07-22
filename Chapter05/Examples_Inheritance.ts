class UserOne {
  email: string = "";
  createDate: number = 0;
  lastLogin: number = 0;
  token: string = "";

  setToken(token: string) {
    this.token = token;
  }

  resetPassword(password: string) {
    return password;
  }
}

class AdminUser extends UserOne {
  adminPages: string[] = ["adming", " settings"];

  resetUserPassword(email: string): string {
    return "password123";
  }
}

class AdminUserTwo extends UserOne {
  constructor(email: string) {
    super();
    this.email = email;
  }
  adminPages: string[] = ["admin", "settings"];
  resetUserPassword(): string {
    return "password123";
  }
}

class SuperAdmin extends AdminUser {
  superPages: string[] = ["super", "Ultimate"];
  readonly myHash: string;

  constructor() {
    super();
    this.myHash = "1234567";
  }

  createAdminUser(adminUser: AdminUser): AdminUser {
    return adminUser;
  }

  resetPassword(password: string): string {
    return password + this.myHash;
  }
}

const adminUser: AdminUser = new AdminUser();
const superAdmin: SuperAdmin = new SuperAdmin();
const newAdmin = new AdminUser();
const addminUserTwo = new AdminUserTwo("hillary@gmail.com");
let propString = "";
for (let u in adminUser) {
  propString += u + ",";
}
// console.log(propString, "propString");
console.log(superAdmin.resetPassword("iampassword"));
console.log(newAdmin.resetPassword("iampassword"));
