const name = "akhil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//use this method for concatination of the string

const gameName = new String('akhilsing-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   akhil   "
console.log(newStringOne);
console.log(newStringOne.trim());    //remove the spaces from (nameStringOne)

const url = "http://akhil.com/akhil%20singh"

console.log(url.replace('%20', '_'))
console.log(url.includes('sunder'))   // asking for keyword (url me hai ki nhi)

console.log(gameName.split('-'));     // Line No. 8