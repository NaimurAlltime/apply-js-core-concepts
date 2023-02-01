function milesToKm(miles){
    const Km = miles * 1.60934;
    return Km;
}

const myMiles = 45;
const myKm = milesToKm(myMiles);
console.log(myKm);