const score = 400
console.log(score)

const balance = new Number(100)    // will give result like [Number: 100]
console.log(balance);   

console.log(balance.toString().length);
console.log(balance.toFixed(2));   // output:100.00 //price on e-commerce websites
// after decimal want to fixed value //if we take toFixed(1) -> output: 100.0

console.log("---------------")

const otherNumber = 123.8966 
console.log(otherNumber.toPrecision(4));  //output:123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));  //it will show in indian style(10,00,000)

//++++++++++ Maths ++++++++++++++++++++++++++++
console.log("-------------------------");
//+++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //abs (absolute value) means 4
console.log(Math.round(2.49));   //#output:2  // If we change (2.49) to (2.5004 or 2.9897) // #output: 3
console.log(Math.ceil(2.2867));    // give high value 3
console.log(Math.floor(2.8967));  // give low value 2

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   // output: 0.4157412707798396 //or may be somthing else

console.log((Math.random()*10) + 1);  // output: 8.219341472331774 //it will change when you run again
//random means any random value multiply by 10 But
//if we add (+ 1) then it gives atleast value b/w (1 to 9) 

console.log(Math.floor(Math.random()*10) + 1) //give  will remove decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //output: atleat 10 or more 
//yahar par kya hoga ki minimun koi abhi value 10 se kam to ayegi nhi
console.log(Math.floor(Math.random() * (max - min + 1)));    // output: under 10