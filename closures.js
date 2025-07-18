function outerr() {
  let counter = 0;

  return function innerr() {
    counter++;
    console.log(counter);
  };
}

const fn = outerr();
fn(); // 1
fn(); // 2
fn(); // 3


//1. Private Variables
function createCounterr() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}

const counter = createCounterr();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1



//2. setTimeout in a Loop Fix
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000 * j);
  })(i);
}
// Output: 1 2 3 (1s apart)



//Interview-Style Closure Question
function multiplierr(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplierr(2);
console.log(double(5)); // 10





function secretPasswordd() {
  const password = "abc123";
  return function reveal() {
    return password;
  };
}

const getPassword = secretPasswordd();
console.log(getPassword()); // "abc123"
