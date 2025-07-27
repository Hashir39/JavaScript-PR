//When an event (like scroll, resize, or keystroke) fires rapidly, running a function on each event can crash performance. Debounce and Throttle help limit how often a function runs.

//Debounce - Delays execution until the event has stopped firing for a specified time.

//Syntax:
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


//Example
const search = debounce(() => {
  console.log('API called');
}, 500);

input.addEventListener('input', search);


//Throttle - Ensures a function runs at most once every specified interval, even if the event keeps firing.

//Syntax
function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}


//Example
const handleScroll = throttle(() => {
  console.log('Scrolled');
}, 300);

window.addEventListener('scroll', handleScroll);


//Use Cases: - scrolling , windows resizing , mouse moving , button spamming


