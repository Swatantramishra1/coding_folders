throttle = (func, delay) => {
  let inThrottle;

  return function () {
    let context = this;
    let args = arguments;

    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        func.apply(context, args);
      }, delay);
    }
  };
};

function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3);



