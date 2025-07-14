//Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that take one argument at a time.

function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6
