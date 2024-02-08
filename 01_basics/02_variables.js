const accountId = 12345
let accountEmail = "smadhvendra80@gmail.com"
var accountPwd = "1234"
// Now we dont use var because of issue in block scope and functional scope
accountCity = "Jaipur"
let accountState;

// accountId = 2    X---Not Allowed -> These are constant values and cannot be changed---X

accountEmail = "xyz@gmail.com"
accountPwd = "12121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountPwd, accountCity, accountState])