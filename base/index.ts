interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog); // OK


let x = (a: number) => 0;
let y = (b: number, s: string) => 0;


y = x; // OK

// x = y; // Error

class Animal {
  feet: number | undefined;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number | undefined;
  constructor() {}
}
let a: Animal = null as any;
let s: Size = null as any;

a = s; // OK
s = a; // OK

let xx: never;
let xxx: unknown = xx; // OK