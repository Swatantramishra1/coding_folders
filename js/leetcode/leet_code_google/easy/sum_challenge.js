// s = "3 32 12 50";


// const sum = s.split(" ").reduce((acc, item, index) => {
//         if(item.length > 1) {
//             // split again
//             acc *= item.split("").reduce((acc1, item1, index1) => {
//                return acc1 += isNaN(item1) ? 1 : Number(item1);
//             },0)

//         } else {
//             acc *= isNaN(item) ? 1 : Number(item);
//         }

//         return acc;
// },1);

// console.log(sum);


Array.prototype.myReduce = function (initialValue = 0) {
    // your code here
      let acc = 0;
      acc += initialValue;
      for(let i =0;i<this.length;i++) {
        acc = cb(this[i],i, this);
      }
  
      return acc;
  }
  