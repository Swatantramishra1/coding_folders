Array.prototype.newMap = function (cb)   {
    let result = [];
    for (let i =0;i<this.length;i++) {
        if(this.indexOf(this[i]) > -1) {
            result[i] = cb(this[i],i, this);
        }
    }

    return result;
}

function double(item, index) {
    return item * 2;
}

let s = [1,3,4].newMap(val => val*2);
console.log(s);