// const number = [55,67,78,89,43,70,32];
// let sum = 0;
// for (let i = 0; i<number.length;i++){
//     const element = number[i];
//     sum = sum + element
    
// }
// console.log(sum);

function getarraytotal(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const arraytotal = numbers[i]; 
        sum = sum + arraytotal;
    }
    return sum;

}
let getSumNumber = getarraytotal([560,543,990]);
console.log(getSumNumber);