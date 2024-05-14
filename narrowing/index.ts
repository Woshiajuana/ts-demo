type voidFunc = () => void;
type X = {
  x: string;
};

interface XX extends X {
  xx: number;
}

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

function doSomething(): number {
  return 42;
}

function callMeMaybe(callback: () => void) {
  callback();
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
callMeMaybe(doSomething);

export {};

interface Shape {}
declare function getShape(): Shape;

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

// ---cut---
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
  //                             ^?
  console.log("y coordinate at", yPos);
  //                             ^?
  // ...
}

// @errors: 2339
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  // values.push("hello!");
}

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//   ^?

type Mapish = { [k: string]: unknown };

type M = keyof Mapish;
//   ^?

type X1  = Uppercase<'x'>

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  1: number
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
//   ^?