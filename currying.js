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



// Arrow Function Version
const curriedAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6



//Real-World Example
function filterBy(type) {
  return function(value) {
    return function(item) {
      return item[type] === value;
    };
  };
}

const filterByCategory = filterBy('category')('books');

const items = [
  { name: 'JS Book', category: 'books' },
  { name: 'CSS Shirt', category: 'clothes' }
];

const result = items.filter(filterByCategory);
console.log(result); // [{ name: 'JS Book', category: 'books' }]


//Currying vs Partial Application
//Currying: One argument at a time
//Partial Application: Pre-fill some arguments

// Partial Application
function multiply(a, b, c) {
  return a * b * c;
}

const partialMultiply = multiply.bind(null, 2); // Fix 'a' = 2
console.log(partialMultiply(3, 4)); // 24


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...next) {
        return curried(...args, ...next);
      };
    }
  };
}

// Example
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6





