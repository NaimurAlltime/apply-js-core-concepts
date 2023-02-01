function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    // else{
    //     return false;
    // }
    // or 
    return false;
}

const myLeapYear = isLeapYear(2020);
console.log(myLeapYear);