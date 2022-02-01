let bank = 1080;
let card = 780;
if(bank>card){
    console.log('Bank is the largest number');
}else{
    console.log('Card is the largest Number');
}

// Three Number input and higher Number such :
let busnessMan = 774045;
let Banker = 5569;
let driverNumber = 55898;
if(busnessMan>Banker && busnessMan>driverNumber){
    console.log('busnessMan is higher Number =',busnessMan);
}else if(Banker>busnessMan && Banker>driverNumber){
    console.log('Banker is higher Number =',Banker);

}else{
    console.log('driverNumber is higher Number =',driverNumber);
}

// Function and call return Number 
 function gethigherNumber(first,second,third){
     if(first>second && first>third){
         return first;
     }else if(second>first && second>third){
         return second;
     }else{
         return third;
     }
 }

 let maxNumber = gethigherNumber(560,640,380);
 console.log( 'Max Number is =',maxNumber);

 // Using Math Function 

 let maxNumbers = Math.max(7850,6540,5480,7650,4389,3285,8790,6453,534346);
 console.log('Max Number is =',maxNumbers);