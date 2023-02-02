function sumOfArrayOddNumbers(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function sumOfAnArrayOddNumber(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       sum += element;
    //    console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [3, 4, 5, 23, 27, 29, 30, 34, 36, 47, 57];
const oddNumbers= sumOfArrayOddNumbers(myNumbers);
console.log(oddNumbers);
const oddNumberSum = sumOfAnArrayOddNumber(oddNumbers);

console.log(oddNumberSum);