Array.prototype.newForeach = function(cb) {
    for (var i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

const array1 = ['a', 'b', 'c'];

console.log(array1.newForeach(element => console.log(element)));
