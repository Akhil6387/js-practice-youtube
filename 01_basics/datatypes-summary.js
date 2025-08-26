// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 324756274623

//reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "ironman", "thor"];
let myObj = {
    name: "Akhil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);

console.log("-------------");

// +++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshsinghdotcom"

let anothername = myYoutubename
anothername = "akhildotcom"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    gmail: "akhil@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.gmail = "yadav@gmail.com"

console.log("userOne");
console.log("userTwo");
