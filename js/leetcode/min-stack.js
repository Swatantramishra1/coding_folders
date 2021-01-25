var MinStack = function() {
    this.stack = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
        return this.stack[0];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min;
    for(let i = 0;i < this.stack.length;i++) {
        if(min === undefined) {
            min = this.stack[i];
        }else if(this.stack[i] < min) {
            min = this.stack[i];
        }
    }
    return min;
};

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())