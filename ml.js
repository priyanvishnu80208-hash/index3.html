
// var, let, const

var a = 10;
a = 20;
console.log(a);

var b = 30;
var b = 50;
console.log(b);

let c = 100;
c = 200;
console.log(c);

const d = 23;
console.log(d);

// Variables

var a1 = "vishnupriyan";
let b1 = 23;
const c1 = "salem";

console.log(a1);
console.log(b1);
console.log(c1);

// Datatypes

let a2 = "Marvel";
let b2 = 100;
let boolean = true;
let undefinedValue;
let n = "";

console.log(a2);
console.log(b2);
console.log(boolean);
console.log(undefinedValue);
console.log(n);

// Alert, Prompt, Confirm

// alert(a1);
// prompt(a1);
// confirm(a1);

// Array

let student = ["apple", "orange", "mango", "grape"];

console.log(student);
console.log(student[0]);
console.log(student[3]);

// Object

let object = {
    fruit: ["apple", "orange", "mango", "grapes"],
    electrical: ["wire", "light", "plug", "connect"],
    veg: ["carrot", "beetroot", "tomato", "brinjal"]
};

console.log(object.fruit);
console.log(object.electrical);
console.log(object.veg);

// Arithmetic Operators

let e = 15;
let f = 4;

console.log(e + f);
console.log(e - f);
console.log(e * f);
console.log(e / f);
console.log(27 % 5);
console.log(3 ** 4);

// Pre-increment

let g = 10;
console.log(++g);

// Post-increment

let x = 5;
let y = x++;

console.log(x);
console.log(y);

// Increment

let a3 = 4;
console.log(a3++);
console.log(a3);
console.log(++a3);
console.log(a3);

let a4 = 8;
console.log(a4++);
console.log(a4);
console.log(++a4);
console.log(a4);

// Decrement

let a5 = 4;
let b5 = a5--;

console.log(a5);
console.log(b5);

let b3 = 2;
--b3;
--b3;
console.log(b3);

let b4 = 10;
--b4;
--b4;
console.log(b4);

// Post-decrement assignment

let a6 = 4;
a6 = a6--;
console.log(a6);

// Increment with two variables

let a8 = 4;
let b8 = a8++;

console.log("a8:", a8);
console.log("b8:", b8);

// Pre-increment with two variables

let a11 = 5;
let b11 = --a11;

console.log("a11:", a11);
console.log("b11:", b11);

// Multiple increment operations

let a12 = 5;
let b13 = a12++;
let c10 = ++a12;

console.log(a12);
console.log(b13);
console.log(c10);
