// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

// Example 1:

// Input: num = "69"
// Output: true
// Example 2:

// Input: num = "88"
// Output: true
// Example 3:

// Input: num = "962"
// Output: false
// Example 4:

// Input: num = "1"
// Output: true


const isStrobogrammatic = num => {
    const map = new Map([['6', '9'], ['9', '6'], ['0', '0'], ['1', '1'], ['8', '8']]);
  
    for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
        let str = map.get(num[i]);
      if (!map.has(num[i]) || map.get(num[i]) !== num[j]) {
        return false;
      }
    }
  
    return true;
  };
console.log(isStrobogrammatic("692"));