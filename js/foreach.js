Array.prototype.newForeach = function(cb) {
    for (var i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

const array1 = ['a', 'b', 'c'];

console.log(array1.newForeach(element => console.log(element)));

Array.prototype.myForEach = function(cb) {
    let res = "";
    let arr = this;
    console.log(this.length, cb)
    for(let i =0;i< arr.length;i++) {
      res += cb(arr[i]);
    }
    
    return res;
  }
  
  // Challenge 4
  function forEach(array, callback) {
    let res = "";
      array.myForEach(el => {
          res = callback(el);
        })
    
    console.log(res);
    
  }
  
  let alphabet = '';
  // see for yourself if your forEach works!
  forEach(['a', 'b', 'c', 'd'],function(char) {
    alphabet += char;
  } )
  
  console.log(alphabet);