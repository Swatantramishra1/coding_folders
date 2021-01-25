// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


getLongestCommonPrefix = function (strArr) {
    let longestCommonPrefix = "";

    if(!strArr  || strArr.length == 0) {
        return longestCommonPrefix;
    }

    

   let index = 0;
   let firstStr =  strArr[0];
   for (let i = 0; i < firstStr.length; i++) {
       const element = firstStr[i];
     
       for (let j = 1; j < strArr.length; j++) {
            if(index >= strArr[j].length || element != strArr[j][i])   {
                return longestCommonPrefix;
            }     
       }

       

       longestCommonPrefix += element;
       index++;
       
   }
       

   return longestCommonPrefix;
}

console.log( "Output is --> " + getLongestCommonPrefix(["dog","racecar","car"]))