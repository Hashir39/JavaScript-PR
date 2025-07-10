//A callback is a function passed as an argument to another function and is executed later.
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Hashir";
  callback(name); // greet("Hashir")
}

processUserInput(greet);
