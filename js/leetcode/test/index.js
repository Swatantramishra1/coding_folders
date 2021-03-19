let selectedColor = "";
let selectedBox = {};
let pegIndication = {
    1:0,
    2:0,
    3:0,
    4:0
};



// Global Function

function fillColor(color, id) {
    document.getElementById(id).style.backgroundColor = color;
}

function checkIfFilled() {
    selectedBox
}



1 2 3 4 

if 1 == 4 && 2 == 3 {
    true;

    //whole black filled
}

if 1 !== 4 {
    // white filled
}



if 2 !== 3 {
    // white filled
}

if(1 !== 4 && 2 !== 3) {
    // cross filled
}

function checkPattern() {
        if(selectedBox[1] == selectedBox[4] && selectedBox[3] == selectedBox[2]) {
            // all box needs to be in v
        }
}




//

document.getElementById("colorSelection").addEventListener("click", function(e) {
    // console.log(e.target.id);
    selectedColor = e.target.id;
});


document.getElementById("boxSelection").addEventListener("click", function(e) {
    const id = e.target.id;
    if(!selectedBox[id]) {
        selectedBox[id] = selectedColor;
        fillColor(selectedColor,id);
    }
    
});


