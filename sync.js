//Asyncronous - Execution Order	= Skips waiting tasks, continues
//Synchronous - Execution Order	= Top to bottom, step by step

//Synchronous
console.log("1");
console.log("2");
console.log("3");

//Asyncronous
console.log("start")
setTimeout(() => {
    console.log("hey")
}, 3000);
console.log("End")
