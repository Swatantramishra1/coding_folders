const operand = {
    "+": 1,
    "-":1,
    "*": 1,
    "-":1,
    "%":1
}

let result = -1;
let inputs = "";


const elements = document.querySelectorAll(".circle");
const outputElement = document.querySelector(".output");

elements.forEach(el => {
    el.addEventListener("click", function(e) {
        calculator(e.target.innerText);   
    })
})


function isOperand(val) {
    return operand[val] ? true : false;
}

let checkOperand = false;

function calculator(value) {

    if(value === "C") {
        outputElement.innerText = "0";
        inputs = "";
        checkOperand = false;
        return;
    }
    if(value === "=") {
        result = eval(inputs);
        outputElement.innerText = result;
        inputs = result;
        console.log(result);
    } else {
        if(value === "x") {
            value = "*";
        }

        if(!isOperand(value)) {
            if(checkOperand || outputElement.innerText === "-1") {
                outputElement.innerText = value; 
            } else {

                outputElement.innerText += value; 
            }

            checkOperand = false;
        } else {
            checkOperand = true;
        }
        inputs += value;
    }

  
}   