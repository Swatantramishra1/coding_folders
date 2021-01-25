Array.prototype.newFilter = function(cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i , this)) {
            result.push(this[i]);
        }
    }

   return result;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.newFilter(word => word.length > 6);

console.log(result);