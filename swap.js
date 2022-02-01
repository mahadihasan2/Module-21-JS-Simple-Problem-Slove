let first = 8;
let second = 9;
let third = 10;
console.log(first,second,third);
// let temp1 = first;
// first = second;
// second = temp1;
// let temp2 = second;
// second = third;
// third = temp2;
// console.log(first,second,third);

// let temp1 = first;
// first = third;
// third =temp1;
// console.log(first,second,third);

// using destructing Method 
[first,second,third] = [third,first,second];
console.log(first,second,third);
