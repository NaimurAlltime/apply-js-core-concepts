// 1. variable 
var name = "Naimur Rahman";

// math operation: +, -, *, /
// shorthands: +=, -=, ++, -- 

// 2. array 
var friends = ['sabbir', 'shovo', 'jahid', 'kamal'];
var thirdFriend = friends[2];
// change value 
friends[1] = 'shishir';

// 3. conditionals
// <, >, <=, >=, ==, ====, !=, !== 
var num = 10;
if(num <= 10){
    console.log(true);
}else{
    console.log(false);
}

// 4. loop 
// while loop 
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
// for loop 
for(var i = 1; i <= 10; i++){
    console.log(i);
}

// 5.function 
function addNumber(num1, num2){
    var sum = num1 + num2;
    console.log(sum);
}
// calling function 
addNumber(20, 10);

// 6. Object 
var bioData = {
    name: 'Naimur',
    age: 22,
    address: 'Uttara, Dhaka'
}

var myName = bioData.name;
console.log(myName);
var myAge = bioData['age'];
console.log(myAge);
