function identityString<T>(x: T): T {
  return x;
}

class Box<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  get value(): T {
    return this._value;
  }

  map<U>(mapper: (value: T) => U): U {
    return mapper(this._value);
  }
}
