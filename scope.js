//Global Scope
//Function can access global variables.

let name = "Hashir";

function test() {
  console.log(name);
}

test(); //Hashir


//Function Scope
function test() {
  let age = 22;
}

console.log(age); //Reference Error

//Block Scope
{
  let x = 10;
}

console.log(x); //let and const are block-scoped.


//Lexical Scope
//Functions remember where they were created.

let name = "Hashir";

function outer() {

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); 
//Hashir
//inner() looks outward through surrounding scopes.


//Scope Chain
let a = 1;

function outer() {

  let b = 2;

  function inner() {

    let c = 3;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}

outer();

//1 2 3 
//Current Scope
//   ↓
//Parent Scope
//   ↓
//Global Scope
//This lookup process is the scope chain.

