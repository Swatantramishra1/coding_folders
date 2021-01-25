// Function.prototype.ownApply = (context, args) => {
//   context = context || global;
//   var uniqueId = "00" + Math.random();
//   while (context.hasOwnProperty(uniqueId)) {
//     uniqueId = "00" + Math.random();
//   }

// const { func } = require("prop-types");

//   context[uniqueId] = this;

//   var args = [];
//   var result = null;

//   if (!arr) {
//     result = context[uniqueId]();
//   } else {
//     for (let i = 0; i < arguments.length; i++) {
//       args.push("arr[" + i + "]");
//     }

//     result = eval("context[uniqueId](" + args + ")");
//   }

//   delete context[uniqueId];
//   return result;
// };

// Function.prototype._apply = function (context, args) {
//   context = context || global;
//   let uniqueId = "00" + Math.random();
//   if (context.hasOwnProperty(uniqueId)) {
//     uniqueId = "00" + Math.random();
//   }

//   context[uniqueId] = this;
//   let result = null,
//     args = [];

//   if (!args) {
//     result = context[uniqueId]();
//   } else {
//     for (let i = 0; i < arguments.length; i++) {
//       args.push("arguments[" + arguments[i] + "]");
//     }

//     result = eval("context[uniqueId](" + args + ")");
//   }

//   delete context[uniqueId];
//   return result;
// };

// func.apply(context, args);





// let mul = function(x) {
//             return function mulInte(y) {
//           				if(y != undefined) {
//        						   return y;
//                    }
//                    x = x*y;
//                    return mulInte;
//                   }
//                 };

// mul(2)(4)(7)(8)(11)(13)(15);



// class 



// const add = function(x) {
//   function addSum(y) {
//     if(y != undefined) {
//       return y;
//     }
//     x = x + y;
//     return addSum;
//   }

//   addSum.valueOf = function(){
//     return x;
//   }

//   return addSum;


// }

// console.log(add(4)(5)(2)())

// function add(x){
//   let sum = x;
//   function resultFn(y){
//       sum += y;
//       return resultFn;
//   }
//   resultFn.valueOf = function(){
//           return sum;
//       };
//   return resultFn;
// }

// function add(x) {
//   let sum = x;
//   return function addSum(y) {
//     sum += x;

//   }
// }

function add(){
  let args = [].slice.apply(arguments);
  function resultFn(){
      args = args.concat([].slice.apply(arguments));
      if(args.length >= 1 ){
          return args.slice(0,args.length).reduce(function(acc,next){ return acc+next},0); //will only sum first 3 arguments
      }
      return resultFn;
  }
  return resultFn();
}


console.log(add(3)(4));


