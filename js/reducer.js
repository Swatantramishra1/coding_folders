// Array.prototype.newReducer = function(cb,initialVal = 0)  {
//     let acc = 0;
//     class Counter {
//         #count = 0;
    
//         console.log(this.#count)
//     }

//     acc = acc + initialVal;
//     for (let i = 0; i < this.length;i++) {
//        acc =  cb(acc,this[i],i,this);
//     }

//     return acc;
// }

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.newReducer(reducer));


function createCounter(initialVal = 0) {
    let count = initialVal;
    let counter = {};
    Object.defineProperty(counter,'count', {
        get: () => { return count++},
        configurable: true
    });

    return counter;
};

const counter = createCounter();

console.log(counter.count);
console.log(counter.count);
console.log(counter.count);