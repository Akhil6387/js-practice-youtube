let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1
let isLoggedIn1 = "Akhil"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Akhil" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************** Operations *********************

let value = 3
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(3**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = "Akhil"

let str3 = str1 + str2
console.log(str3);

console.log("----------------------------");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log( ( 3 + 4 ) * 5 % 3);

console.log("--------------------");

console.log(true);   // true
console.log(+true);  // 1   have no sense
console.log(+"");    // 0   have no sense

let gameCounter =100
gameCounter++;
console.log(gameCounter);