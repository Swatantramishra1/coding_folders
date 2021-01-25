Function.prototype.ownBind = function (context) {
  if (typeof this !== "function") {
    throw new Error("cannot be bound as it's not callable");
  }

  var boundTargetFunction = this;
  var boundTargetArguments = Array.prototype.slice.call(arguments, 1);

  return function boundFunction() {
    var tagetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(
      context,
      boundTargetArguments.concat(tagetArguments)
    );
  };
};

Function.prototype._bind = function (context) {
  if (typeof this !== "function") {
    throw new Error("can not be bound as its not callable");
  }

  var boundTargetFunction = this;
  var boundTargetArguments = Array.prototype.slice.call(arguments, 1);

  return function boundFunction() {
    var targetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(
      context,
      boundTargetArguments.concat(targetArguments)
    );
  };
};

var person = {
  lastName: "Anand",
};

function fullName(salutaion, firstName) {
  console.log(salutaion, firstName, this.lastName);
}

var bindFullName = fullName.ownBind(person, "Mr");

bindFullName("Ankur");


Function.prototype.newBind = function(context) {
  if(typeof this !== "function") {
    throw new Error("can not be bound as its not function");
  }

  var boundTargetFunction = this;
  var boundTargetArguments = Array.prototype.slice.call(arguments,1);

  return function() {
    var targetArguements = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(context, boundTargetArguments.concat(targetArguements));

  }
}

function fullName(salutaion, firstName) {
  console.log(salutaion, firstName, this.lastName);
}

var bindFullName = fullName.newBind(person, "Mr");

bindFullName("Ankur");

