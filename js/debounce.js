debounce = (func, delay) => {
  let inDebounce;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(inDebounce);

    inDebounce = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

deb = function (fun, delay) {
  let inDebounce;

  return function() {
    let context = this;
    let args = arguments;

    clearTimeout(inDebounce);

    inDebounce = setTimeout(() => {
      fun.apply(context, args);
    }, delay);
  }

}

debounce_immediate = (func, delay, immediate) => {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);

    if (callNow) {
      func.apply(context, args);
    }
  };
};


const name = (func, delay) => {
  
}