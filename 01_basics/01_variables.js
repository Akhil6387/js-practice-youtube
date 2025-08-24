const accountId = 112233
let accountEmail = "akhil@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 1     // not allowed

accountEmail = "akh@gmail.com"
accountPassword = "0101"
accountCity = "Kanpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])