Function.prototype._myApply = function(context, args) {
    context = context || this;

    let randomId = "00" + Math.random();
    if(context.hasOwnProperty(randomId)) {
        randomId = "00" + Math.random();
    }

    context[randomId] = context;
    let result;
    let arg = [];

    if(!args) {
        result = context[randomId]();
    } else {
        for(let i = 0; i < args.length; i++) {
            arg.push("args["+i+"]")
        }

        result = eval("context[randomId]("+arg+")");
        delete context[randomId];
    }

    return result;
}

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max._myApply(null, numbers);

// console.log(max);

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push._myApply(array, elements);
// console.info(array);