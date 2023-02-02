function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        // console.log(i);
        result *= i;
    }
     return result;
}

const myResult = factorial(5);
console.log("Factorial is: ", myResult);

// factorial with while loop 
function factorialWhile(number){
    let result = 1;
    let i = number;
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}

const myFact = factorialWhile(5);
console.log("Factorial is: ", myFact);