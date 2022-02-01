function getLargestNumber(numbers){
    let largests = 0;
    for(let i=0; i< numbers.length; i++){
        let element = numbers[i];
        // console.log(element);
        if(element>largests){
            largests = element
        }
    }
    return largests;

}
let biggerNumber = getLargestNumber([32,56,31,65,43,98,65,90]);
console.log(biggerNumber);
