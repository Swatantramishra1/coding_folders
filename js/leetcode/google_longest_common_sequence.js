// "ABDFS", "BFQS" => "BFS"


const getLongestSubSequence = (s1,s2) => {
    let longestSequence = [];
    let tempObj = {};
    let string = "";
    let i = j =0;
    // for (let k = 0; k < s1.length; k++) {
        i = j =0;
        for ( i; i < s1.length; i++) {
            if(i !== 0) {
                j++;
            }
    
            if(j > (s2.length -1)) {
             j = i+1;
    
            }
    
            for ( j; j < s2.length; j++) {
                if(s1[i] === s2[j]) {
                    string += s1[i];
                    break;
                }
            }
        }

        if(!tempObj[string]) {
            tempObj[string] = 0;
        }
        
    // }

    console.log(tempObj);
}

getLongestSubSequence("AGGTAB","GXTXAYB");