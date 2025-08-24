//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 ==1);
//console.log(2 != 1);

//console.log("2" > 1);
//console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.log(" ---- ");

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//In most of the cases we avoid this type of conversions
//bcoz they all(null and undefined comparisons) makes the confusion


// ===     it will check both value and datatype 

console.log("2" == 2);  //it will assing the value so it give true But if

console.log("2" === 2);  //it will also check dataType "2" (which is string) so it will false