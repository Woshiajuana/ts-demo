type voidFunc = () => void;
type X  = {
  x: string
}

interface XX extends X {
  xx: number
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

export{}

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