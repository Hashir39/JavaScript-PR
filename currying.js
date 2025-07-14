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


