// Three Number input and Lower Number such :
let busnessMan = 774045;
let Banker = 5569;
let driverNumber = 55898;
if(busnessMan<Banker && busnessMan<driverNumber){
    console.log('busnessMan lower Number is =',busnessMan);
}else if(Banker<busnessMan && Banker<driverNumber){
    console.log('Banker  lower Number is =',Banker);

}else{
    console.log('driverNumber is lower Number is =',driverNumber);
}

// Function and call return Number 
function getlowerNumber(first,second,third){
    if(first<second && first<third){
        return first;
    }else if(second<first && second<third){
        return second;
    }else{
        return third;
    }
}

let minNumber = getlowerNumber(560,640,380);
console.log( 'Min Number is =',minNumber);