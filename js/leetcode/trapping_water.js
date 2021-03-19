let arr = [2,4,5,3,2,6,4,7,5,1,1,5];


// getTrappedWater = (arr) => {
//     let res = 0;
//     for (let i = 1; i < arr.length; i ++) {

//         let val = arr[i];
//         let maxLeft = 0,maxRight = 0;
//         // left 
//         for (let left = 0; left < i; left++) {
//             if(arr[left] > maxLeft) {
//                 maxLeft = arr[left];
//             }  
//         }

//         // right 
//         for (let right = i+1; right < arr.length; right++) {
//             if(arr[right] > maxRight) {
//                 maxRight = arr[right];
//             }  
//         } 

//         let min = 0;
//         if(maxRight > maxLeft) {
//             min = maxLeft;
//         } else {
//             min = maxRight;
//         }

//         res += (min - arr[i]);
        
//     }

//     console.log(res)
// }

// getTrappedWater(arr);


function getTotalNoOfValume(arr) {
    storeLeftRightMax(arr);
    let totalValume = 0;
    srr = [];
   
    for (let i = 0; i < arr.length; i++) {
        let leftMax = obj[i]["left"];
        let rightMax = obj[i]["right"];

        let min = Math.min(leftMax,rightMax);

        totalValume += min - arr[i];
        
    }

    return totalValume;
}


function trappingWater(arr) {
    let res = 0;
    for (let i = 1; i < arr.length-1; i++) {
       
        left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        right = arr[i];

        for (let j = i+1; j < arr.length; j++) {
         
            right = Math.max( right, arr[j]);
        }

        res += (Math.min(left, right) - arr[i])
        
    }

    console.log(res)
}


function n() {
    let res = 0;
     
    // For every element of the array
    for (let i = 1; i < height.length-1; i++) {
         
        // Find the maximum element on its left
        let left = height[i];
        for (let j=0; j<i; j++)
           left = max(left, height[j]);
         
        // Find the maximum element on its right   
        let right = height[i];
        for (let j=i+1; j<n; j++)
           right = max(right, height[j]); 
        
       // Update the maximum water    
       res = res + (min(left, right) - height[i]);   
    }
 
    return res; 
}


function storeLeftRightMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        obj[i] = {};
        obj[i]["left"] = Math.max(...arr.slice(0,i+1));
        obj[i]["right"] = Math.max(...arr.slice(i,arr.length));
        
    }
}

trappingWater(arr);




var highFive = function(items) {
    let resObj = {};
    for(let i =0;i < items.length;i++) {
        let valPoints = items[i];
        if(resObj.hasOwnProperty(valPoints[0])) {
           resObj[valPoints[0]].push(valPoints[1]);
        } else {
            resObj[valPoints[0]] =[valPoints[1]];
        }
    }
    
   
    for (const key in resObj) {
        if (resObj.hasOwnProperty(key)) {
            resObj[key] = resObj[key].sort((a,b) => b-a);
          
           const sum = resObj[key].slice(0,5).reduce((a, b) => a + b, 0);;
           resObj[key] = Math.floor(sum/5);

        }
    }

    let res = [];
    for (const key in resObj) {
        if (resObj.hasOwnProperty(key)) {
            res.push([parseInt(key),resObj[key]])   
        }
    }



    console.log(res);
};

// highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]);

// Array.

// 1640. Check Array Formation Through Concatenation
var canFormArray = function(arr, pieces) {
    let arrPieces = pieces.reduce((acc, val) => acc.concat(val), []).sort ;
 console.log(arrPieces)
 for (let i = 0; i < pieces.length; i++) {
    let elem = pieces[i];
     if(elem.length > 1) {
         let lastIndex ;
         for(let j =0; j<elem.length;j++) {
             const index  = arr.indexOf(elem[j]);
                 if(j == 0 && index !== -1) {
                     arr[index] = -1;
                     lastIndex = index;
                 } else if(arr[lastIndex+j] !== elem[j]) {
                     return false;
                 }
         }
     } else {
         const index  = arr.indexOf(elem[0]);
         if(index !== -1) {
             arr[index] = -1;
         } else {
             return false;
         }
     }
 }

 return true;
};


[37,69,3,74,46]
[[37,69,3,74,46]]
console.log(canFormArray([37,69,3,74,46],[[37,69,3,74,46]]));