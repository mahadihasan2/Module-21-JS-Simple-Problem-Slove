function getLowestNumber(numbers){
    let lowest = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        let element = numbers[i];
        if(element<lowest){
            lowest = element;
        }
    }
    return lowest;
}

let lowestNumberIs = getLowestNumber([67,54,43,32,77,21,12]);
console.log(lowestNumberIs);