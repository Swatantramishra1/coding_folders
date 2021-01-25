s = "([)]"

let symbolsObj = {
    open: ["{","[","("],
    close: ["}","]",")"]
}

var isValid = function(s) {
    const tempArr = s.split("");
    let stack = new Stack();
    for(let item of tempArr) {
        const openIndx = symbolsObj.open.indexOf(item);
        const closeIndx = symbolsObj.close.indexOf(item);

        if(openIndx >= 0) {
            stack.push(item);
        } else if (closeIndx >= 0) {
            let lastItem = stack.pop();
            let openIndex = symbolsObj.open.indexOf(lastItem);
            let closeIndex = symbolsObj.close.indexOf(item);

            if(openIndex != closeIndex) {
             return false;
            }
        }
    }

    if(stack.length === 0) {
        return true;
    } else return false;
};


class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    push(x) {
        this.stack.unshift(x);
        this.length++;
    }

    pop() {
        this.length--;
        return this.stack.shift();
    }

    length() {
        return this.length;
    }
}


console.log(isValid(s))