"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
function doSomething() {
    return 42;
}
function callMeMaybe(callback) {
    callback();
}
// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
callMeMaybe(doSomething);
// ---cut---
function paintShape({ shape, xPos = 0, yPos = 0 }) {
    console.log("x coordinate at", xPos);
    //                             ^?
    console.log("y coordinate at", yPos);
    //                             ^?
    // ...
}
// @errors: 2339
function doStuff(values) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // ...but we can't mutate 'values'.
    // values.push("hello!");
}
//   ^?
