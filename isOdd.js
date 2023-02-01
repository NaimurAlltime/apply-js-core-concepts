function isOdd(number){
    const reminder = number % 2;
    if(reminder === 0){
        return false;
    }
    else{
        return true;
    }
}

const myIsOdd = isOdd(255);
console.log(myIsOdd);