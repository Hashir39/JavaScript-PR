console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); // runs only once

console.log("End"); 
//Start
//End
//(This runs after 2 seconds)



console.log("Start");

const intervalId = setInterval(() => {
  console.log("Repeating every 2 seconds");
}, 2000);

// Optional: stop it after 7 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped interval");
}, 7000);

console.log("End");
//Start
//End
//Repeating every 2 seconds
//Repeating every 2 seconds
//Repeating every 2 seconds
//Stopped interval


