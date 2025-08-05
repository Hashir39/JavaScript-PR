//A callback is a function passed as an argument to another function and is executed later.
function greet(ame) {
  console.log("Hello " + ame);
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





//Callbacks in Event Listeners
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});




//Callback in Array Methods
const nums = [1, 2, 3, 4];

nums.forEach(function (num) {
  console.log(num * 2);
});




//Custom Callback Function
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); // 8





// Nested Callbacks / Callback Hell
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
//Callback hell = deeply nested callbacks.
//Solution: Use Promises or async/await.





// Handling Errors in Callbacks
function fetchData(callback) {
  const error = false; // try changing this to true

  if (error) {
    callback("Something went wrong", null);
  } else {
    callback(null, { id: 1, name: "Hashir" });
  }
}

fetchData((err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
