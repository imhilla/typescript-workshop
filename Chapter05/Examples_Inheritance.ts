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

class SuperAdmin extends AdminUser {
  superPages: string[] = ["super", "Ultimate"];
  createAdminUser(adminUser: AdminUser): AdminUser {
    return adminUser;
  }
}

const adminUser: AdminUser = new AdminUser();
let propString = "";
for (let u in adminUser) {
  propString += u + ",";
}
console.log(propString, "propString");
