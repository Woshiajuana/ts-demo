"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet) {
    console.log("Hello, " + pet.name);
}
greet(dog); // OK
let x = (a) => 0;
let y = (b, s) => 0;
y = x; // OK
// x = y; // Error
class Animal {
    constructor(name, numFeet) { }
}
class Size {
    constructor() { }
}
let a = null;
let s = null;
a = s; // OK
s = a; // OK
let xx;
let xxx = xx; // OK
function g() {
    return Promise.reject("error!");
}
function f() {
    return __awaiter(this, void 0, void 0, function* () {
        yield using;
        x = new C();
        return g(); // missing an `await`
    });
}
