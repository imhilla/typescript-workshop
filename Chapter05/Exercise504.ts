export class User {
  private userName: string;
  private token: string;
  readonly timeStamp: number = new Date().getTime();

  constructor(userName: string, token: string) {
    this.userName = userName;
    this.token = token;
  }

  logOut(): void {
    this.userName = "";
    this.token = "";
  }

  getUser() {
    return {
      userName: this.userName,
      token: this.token,
      createdAt: this.timeStamp,
    };
  }

  protected renewToken(newToken: string) {
    this.token = newToken;
  }
}

class Cashier extends User {
  balance: number = 0;
  float: number = 0;
  start(balance: number, float: number) {
    this.balance = balance;
    this.float = float;
  }
}

class Inventory extends User {
  products: string[] = [];
  constructor(userName: string, token: string, products: string[]) {
    super(userName, token);
    this.products = products;
  }
}
