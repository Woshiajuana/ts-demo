var Demo2;
(function (Demo2) {
    Demo2["A"] = "a";
    Demo2["B"] = "b";
})(Demo2 || (Demo2 = {}));
console.log('Demo1 A => ', "a" /* Demo1.A */);
console.log('Demo2 A => ', Demo2.A);
var x = 1;
console.log('Demo3 B => ', 2 /* Demo3.B */);
var Demo4;
(function (Demo4) {
    Demo4[Demo4["A"] = 1] = "A";
    Demo4[Demo4["B"] = 2] = "B";
    Demo4[Demo4["C"] = x * 3] = "C";
})(Demo4 || (Demo4 = {}));
