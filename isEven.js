function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myIsEven1 = isEven(240);
console.log(myIsEven1);
const myIsEven2 = isEven(245);
console.log(myIsEven2);