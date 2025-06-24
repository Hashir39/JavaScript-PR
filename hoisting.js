// 1. Variable hoisting with var
console.log(a); // undefined (not ReferenceError!)
var a = 10;
console.log(a); // 10

// 2. Variable hoisting with let/const
try {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (err) {
  console.log(err.message);
}
let b = 20;

// 3. Function hoisting
sayHello(); // ✅ Works because function declarations are hoisted

function sayHello() {
  console.log("Hello from hoisted function!");
}

// 4. Function expressions are NOT hoisted
try {
  sayHi(); // ❌ TypeError: sayHi is not a function
} catch (err) {
  console.log(err.message);
}

var sayHi = function () {
  console.log("Hi from function expression!");
};

// 5. Hoisting inside functions (local scope)
function testScope() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
testScope();

// 6. Temporal Dead Zone (TDZ) with let
function checkTDZ() {
  try {
    console.log(y); // ReferenceError
  } catch (e) {
    console.log("TDZ Error:", e.message);
  }
  let y = 100;
}
checkTDZ();

// 7. Hoisting priority
var msg = "Global";

function showMsg() {
  console.log(msg); // undefined, due to local var hoisting
  var msg = "Local";
  console.log(msg); // Local
}
showMsg();
