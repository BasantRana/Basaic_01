// JavaScript Primitive Data Types Summary with typeof

// 1. Number
let age = 25;
console.log(typeof age); // "number"

// 2. String
let name = "Alice";
console.log(typeof name); // "string"

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// 4. Undefined
let score;
console.log(typeof score); // "undefined"

// 5. Null
let data = null;
console.log(typeof data); // "object" (this is a known JavaScript quirk)

// 6. Symbol (ES6)
let uniqueId = Symbol('id');
console.log(typeof uniqueId); // "symbol"

// 7. BigInt (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

-=======================================================

// JavaScript Non-Primitive Data Types Summary with typeof

// 1. Object
let person = { name: "Bob", age: 30 };
console.log(typeof person); // "object"

// 2. Array (which is a type of object)
let numbers = [1, 2, 3];
console.log(typeof numbers); // "object"

// 3. Function (special object)
function greet() {
    return "Hello";
}
console.log(typeof greet); // "function"

------------------------------------------------------

// JavaScript is a dynamically typed language
let dynamic = 10;
console.log(typeof dynamic); // "number"

dynamic = "Now I'm a string!";
console.log(typeof dynamic); // "string"

dynamic = false;
console.log(typeof dynamic); // "boolean"