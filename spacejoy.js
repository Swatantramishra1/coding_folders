// // var stock = [100, 180, 260, 310, 40, 535, 695];

// // // step 1-
// // // 10-5 => 5
// // // 5-2 =>  3

// // id1 = 0;
// // id2 = 1;

// // // curMin = 0;

// // // arr[i] < arr[curMin]
// // //   curMin = 1;

// // //   loop through arr

// // function getMaxProfits(arr, s, e) {
// //   if (e < s) {
// //     return 0;
// //   }

// //   let profit = 0;

// //   for (let i = s; i < e; i++) {
// //     for (let j = i + 1; j <= e; j++) {
// //       if (arr[j] > arr[i]) {
// //         let curr_profit =
// //           parseInt(arr[j]) -
// //           parseInt(arr[i]) +
// //           (parseInt(getMaxProfits(arr, s, i - 1)) +
// //             parseInt(getMaxProfits(arr, j + 1, e)));

// //         if (profit < curr_profit) {
// //           profit = curr_profit;
// //         }
// //       }
// //     }
// //   }

// //   return profit;
// // }

// // console.log(getMaxProfits(stock, 0, stock.length - 1));

// new // Object.create

// class LinkedList {
//     constructor(val) {
//         this.val = val;

//     }

//     getVal() {
//         return this.val;
//     }
// }

// let linked= new LinkedList()

// Object.create()

// __proto__ -
// prototype

// let a  = {
//     name: "sourabh"
// }

// let b = {
//     name: "swa"
// }

// a= b;
// a.__proto__

// Object

// relative, absolute, static, fixed, sticky;
// dispatchEvent;
