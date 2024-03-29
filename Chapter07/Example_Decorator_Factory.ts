function ClassDecoratorFactory(message: string) {
  console.log(`${message} inside factory`);
  return function (constructor: Function) {
    console.log(`${message} inside decorator`);
  };
}
