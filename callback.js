//A callback is a function passed as an argument to another function and is executed later.
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Hashir";
  callback(name); // greet("Hashir")
}

processUserInput(greet);




//Callback with setTimeout()
console.log("Before");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("After");

