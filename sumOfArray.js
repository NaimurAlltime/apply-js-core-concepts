function sumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       sum += element;
       console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 25, 27, 18, 89, 56, 54];
sumOfAnArray(myNumbers);