let arr = [1,2,3,4,5,6,7,8,9];

let sum = arr.reduce((acc, curr) => acc + curr, 0);



Array.prototype.myReduce = function(acc = 0, curr = 0, index = 0) {
    acc = acc || 0;
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        acc = acc + arr[i];
    }
    return acc;
}



console.log(arr.myReduce());




