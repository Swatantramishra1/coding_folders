var threeSumClosest = function(nums, target) {
    let closestValue;
    let i1 = 0, i2 = 1, i3 = 2;

    let firstVal = nums[i1];
    let secondVal = nums[i2];
    let thirdVal = nums[i3];
    let sum = firstVal + secondVal + thirdVal;
    if(!closestValue || sum - target > closestValue) {
        closestValue = sum - target;
    }



    if(nums.length > 3) {
        for(let i=1;i<nums.length;i++) {
            i1++;i2++;i3++;

            if(nums[i] !== target) {
                const sum = nums[i1] + nums[i2] + nums[i3];
                if(!closestValue || sum - target > closestValue) {
                    closestValue = sum - target;
                     }
            }
            
        }
    }



   
    
    return closestValue;
};


threeSumClosest([-1,2,1,-4], 1);