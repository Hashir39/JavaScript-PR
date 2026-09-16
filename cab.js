//call()

//Invokes the function immediately.

function greet() {
  console.log(this.name);
}

const user = {
  name: "Hashir"
};

greet.call(user);

function greet(city, country) {
  console.log(this.name, city, country);
}

greet.call(user, "Karachi", "Pakistan"); //Hashir Karachi Pakistan




//apply()

//Same as call().

//Difference:

//Arguments are passed as an array.

greet.apply(user, ["Karachi", "Pakistan"]);



//bind()

//Does NOT execute immediately.

//Returns a new function.

const boundFn = greet.bind(user);

boundFn(); //Hashir

