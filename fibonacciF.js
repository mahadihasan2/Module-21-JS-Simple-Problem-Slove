function fibonacciSeries(number){
    if(typeof number !='number'){
        return 'please enter the number';
    }else if(number<2){
        return 'Enter the possitive Number is Geter than 1';
    }
   const fibo = [0,1];
   for (let i=2; i<=number;i++){
       fibo[i] = fibo[i-1] + fibo[i-2];
   }
   return fibo;
}

let series = 3;
let fiboSeries = fibonacciSeries(series);
console.log(fiboSeries);