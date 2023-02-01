const myInches1 = 60;
const myFeet1 = myInches1 / 12;
console.log(myFeet1);

const myInches2 = 72;
const myFeet2 = myInches2 / 12;
console.log(myFeet2);


// inch to feet create a function 
function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myInches3 = 88;
const myFeet3 = inchesToFeet(myInches3);
const myFeet3Fixed = myFeet3.toFixed(2);
console.log(myFeet3Fixed);

const myInches4 = 104;
var myFeet4 = inchesToFeet(myInches4);
const myFeet4Fixed = myFeet4.toFixed(2);
console.log(myFeet4Fixed);