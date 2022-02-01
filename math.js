// Absolute Number

let number = -10;
let celingNumber = Math.abs(number);
console.log(celingNumber);

// Fraction Number ke integer number kinto tar upor number dekhabe
const number1 = 55.6666;
const uperNumber = Math.ceil(number1);
console.log(uperNumber);

// less  number dekhabe

const number2 = 68.7564;
const lowerNumber = Math.floor(number2);
console.log(lowerNumber);

// kacakaci number dekhabe 
const number3 = 45.443;
const leyarestNumber = Math.round(number3);
console.log(leyarestNumber);

// random Number 

for(i=0;i<=10;i++){
    const random = Math.random()*6;
    const rounded = Math.round(random);
    console.log(rounded);

}
