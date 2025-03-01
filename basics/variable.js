const accountId = 12345  //this cannot be changed
let accountEmail ="divakar123@yahoo.com" //variable
var accountPass ="12345"
accountcity="dehradun"
let accountState;
/*
    Prefer not to use var because of issue in block scope and functional scope
*/
// accountId = 2  not allowed
accountEmail="ds@google.com"
accountPass="098"
accountcity="delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountcity,accountState])