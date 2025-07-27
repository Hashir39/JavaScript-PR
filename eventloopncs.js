//JavaScript is:
//Single-threaded: Only one thing happens at a time.
//Non-blocking: Uses the event loop to handle async tasks.

//CALL STACK — The Synchronous Engine
//The call stack is where JavaScript keeps track of function calls.

function gret() {
  console.log("Hello");
}

function start() {
  greet(); // pushed to stack
  console.log("Start done");
}

start();
//Call Stack:
//1. global()
//2. start()
//3. greet()
//4. console.log("Hello")





// EVENT LOOP — Handles Asynchronous Tasks
//JavaScript uses the event loop to deal with things like:
//setTimeout
//fetch or AJAX
//Promises
//DOM events (click, etc.)

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

//1 , 3 , 2



//Microtask Queue vs. Callback Queue
//Microtasks: Promise.then, catch, finally, queueMicrotask
//Callback (Macro) tasks: setTimeout, setInterval, DOM events


console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

//A , D , C(microtask) , B(macrotask)




//Real-World Example
function fetchData() {
  setTimeout(() => console.log("🌐 Fetched from API"), 1000);
}

function main() {
  console.log("🔷 Start");
  fetchData();
  console.log("🔶 End");
}

main();


//Star , End , Fetched from API

