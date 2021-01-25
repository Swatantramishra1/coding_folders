Function.prototype._apply = function(context,args) {
  context = context || globalThis;
  let uniqueId = "00" + Math.random();
  if(context.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }

  context[uniqueId] = this;
  let result = null;
  if(!args) {
      result = context[uniqueId]();
  } else {
      for (let i = 0; i < arguments.length; i++) {
          args.push("arguments["+arguments[i]+"]");
      }

      result = eval("context[uniqueId]("+args+")")
  }

  delete context[uniqueId];
  return result;
}