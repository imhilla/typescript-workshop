interface ErrorMessage {
  [msg: number]: string;
  apiId?: number;
}

const errorMessage: ErrorMessage = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
};

const errorCodes: number[] = [400, 401, 403];
errorCodes.forEach((code: number) => {
  errorMessage[code];
});
