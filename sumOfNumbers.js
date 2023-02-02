// 1 to 10 sum 
function sumOfNumber(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        console.log(i);
        sum += i;
    }
    return sum;
}

const sumOf = sumOfNumber(20);
  console.log("Sum is: ", sumOf);
