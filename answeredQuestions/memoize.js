function memoize(fn) {
    let cache = {};
    return function () {
        const args = JSON.stringify(arguments);
        if(cache[args]) {
            return cache[args];
        }

        const evaluatedAns = fn.apply(this, arguments);
        cache[args] = evaluatedAns;

        return evaluatedAns;
    }
}


function factorial(n) {
    if(n === 0 || n === 1) {
      return 1
    }
    return factorial(n-1) * n; 
 }
 const memoizedFactorial = memoize(factorial)
 console.log(memoizedFactorial(3));
 console.log(memoizedFactorial(3));