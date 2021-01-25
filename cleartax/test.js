Function.prototype.aply = function (context, args) {
    context = context | globalThis;
    let unique = "00" + Math.random();
    if(context.hasOwnProperty(unique)) {
        unique = "00" + Math.random();
    }

    context[unique] = this;
    let result = null,
    args = [];
    if(!args) {
        result = context[unique]();
    } else {
        for (let i = 0; i < arguments.length; i++) {
            args.push("arguments["+arguments[i]+"]")
        
        }

        result = eval("context[unique]("+args+")")
    }

    delete context[unique];
    return result;
}