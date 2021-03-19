// Convert a string to an integer without using any built-in functions of the programming
// language you choose. You are welcome to use any mathematical operators.
// ● Add all test cases that you’d like to write to ensure correctness of your code.
// ● Pick a language of your choice. We care more about how you solve the problem
// than the language you choose
// ● Highlight limitations of your solution
// ● Sprinkle comments generously, where required


  /**
     * This will be responsible for to check if a value is not a number
     * @param {any} value
     * @returns {boolean}
     */
const checkIsNotANumber = (value) => isNaN(value);



    /**
     * return 0 in case of not a number & if number is
     *  valid it will try to convert and return the same
     * @param {string} str
     * @returns {number}
     */

const convertStringToInt = (str) => {
    let res;
    res = str * 1;
    if(!Number.isNaN(res) && typeof res === 'number') {
        return res;
    } else {
        if(checkIsNotANumber(str[0]) ) {
            return 0;
        } else {
            let tilIndex = 0;
            for(let i = 1; i < str.length; i++) {
                if(!checkIsNotANumber(str[i]) ) {
                    tilIndex++;
                 } else {
                     break;
                 }
            }
            const num = str.split('').slice(0, tilIndex+1).join('') * 1;
            return num;

        }
    }
}

console.log(convertStringToInt("-42"));


// ****************************************************************


// [ Second Question ]

{/* 
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>


<script type="text/javascript">
            const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
            for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
                document.getElementById(`btn-${btnNum}`).onclick = () => {
                // Tell her what she's won!
                alert(prizes[btnNum]);
            };
        }
</script> */}


// Here is problem and explanation given below

const PROBLEM = "Once javascript gets execute here and for loop finishes  'btnNum' becomes 3, so once we click on button it has index value 3 and as we can see array length is 3 so it returns undefined. Its because of scoping";

const SOLUTION = "Instead of using 'var' use 'let', let is limited to the block in which it is declared while variable declared with var has the global scope.";
