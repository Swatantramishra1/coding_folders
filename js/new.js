function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}

function _new(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }

  var ret = func.apply(res, Array.arguments.slice.call(arguments, 1));

  if (typeof ret === "object" || (typeof ret === "function" && ret !== null)) {
    return ret;
  }

  return res;
}


function new_key(fun) {
  var res = {};
  if(fun.prototype !== null) {
    res.__proto__ = fun.prototype;
  }

  var ret = fun.apply(res, Array.prototype.slice.call(arguments, 1));
  if(typeof ret === "object" || typeof ret === "function" && ret !== null) {
    return ret;
  }

  return res;
}

var myCar = new Car("Eagle", "Talon TSi", 1993);
var MyNewCar = new_key(Car, "Eagle", "Talon TSi", 1993);
console.log(MyNewCar.make);

// var func1 = function (x) {
//   this.x = x;
// }; // used with 'new' only
// var func2 = function (x) {
//   var z = {};
//   z.x = x;
//   return z;
// }; // used both ways
// func1.prototype.y = 11;
// func2.prototype.y = 12;

// A1 = new func1(1); // has A1.x  AND  A1.y
// A2 = func1(1); // undefined ('this' refers to 'window')
// B1 = new func2(2); // has B1.x  ONLY
// B2 = func2(2);
