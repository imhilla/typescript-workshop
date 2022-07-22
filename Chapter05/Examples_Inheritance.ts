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
