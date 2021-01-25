Function.prototype.ownCaLL = (context, args) => {
  context = context || globalThis;
  let uniqueId = "00" + Math.random();

  while (context.hasOwnProperty(uniqueId)) {
    context[uniqueId] = "00" + Math.random();
  }

  context[uniqueId] = this;

  let args = [];

  for (let i = 0; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  let result = eval("context[uniqueId](" + args + ")");

  delete context[uniqueId];
  return result;
};

Function.prototype._call = (context, args) => {
  context = context || globalThis;
  let uniqueId = "00" + Math.random();
  if (context.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }

  context[uniqueId] = this;
  let args = [];

  for (let i = 0; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  let result = eval("context[uniqueId](" + args + ")");

  delete context[uniqueId];
  return result;
};


const call = (context, args) => {
  context = context || globalThis;
  let uniqueId = "00" + Math.random();
  if(context.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }

  context[uniqueId] = this;
  args =[];
  for (let i = 0; i < arguments.length; i++) {
    args.push("arguments["+i+"]")
    
  }

  let result = eval("context[uniqueId]("+args+")");
  delete context[uniquId];
  return result;
}
