// example 4! = 4 * 3 * 2 * 1 
function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        // console.log(i);
        result *= i;
    }
    return result;
}

var myResult = factorial(5);
console.log(myResult);