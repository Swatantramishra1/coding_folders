const maxProfit = (prices) => {
  let n = prices.length;
  let cost = 0;
  let MaxCost = 0;

  if (n == 0) {
      return 0;
  }

  // store the first element of array in a variable
  let Min_price = prices[0];

  for (let i = 0; i < n; i++) {

      // now compare first element with all the
      // element of array and find the Minimum element
      Min_price = Math.min(Min_price, prices[i]);

      // since Min_price is smallest element of the
      // array so subtract with every element of the
      // array and return the MaxCost
      cost = prices[i] - Min_price;

      MaxCost = Math.max(MaxCost, cost);
  }
  return MaxCost
  }
  
  
  console.log(maxProfit([7, 1, 5, 3, 6, 4]))