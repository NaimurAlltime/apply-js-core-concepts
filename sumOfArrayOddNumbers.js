function sumOfArrayOddNumbers(numbers){
    // let myElements = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
        //   myElements.push(numbers);
          sum += element;
          console.log(index, element, sum);
        }
        // console.log(index, element);
    }
}

const myNumbers = [12, 21, 27, 28, 63, 65, 72, 77];
sumOfArrayOddNumbers(myNumbers);