interface ErrorMessage {
  [msg: number]: string;
  apiId: number;
}

const errorMessage: ErrorMessage = {
  0: "System Error",
  1: "overload",
  apiId: 1234,
};
