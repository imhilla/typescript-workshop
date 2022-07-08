export const account = {
  due: 1000,
  paid: 0,
  status: "OPEN",
  payAccount: function (amount: number): string {
    return "Unimplemented";
  },
  printStatus: function (): string {
    return "Unimplemented";
  },
};

console.log(account?.printStatus());
console.log(account?.payAccount(1500));
console.log(account?.payAccount(500));
console.log(account?.payAccount(500));
