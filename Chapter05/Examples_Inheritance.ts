class UserOne {
  email: string;
  createDate: number = 0;
  lastLogin: number = 0;
  token: string;

  setToken(token: string) {
    this.token = token;
  }

  resetPassword(password: string) {
    return password;
  }
}
