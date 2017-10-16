// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
function genAllCoinChange(cents, input = { pennies: 0, nickels: 0, dimes: 0, quarters: 0 },result=[]){//,result=[]) {// = Object.assign({}, template)){
    if(cents==0){
        //Loop through results to NOT add if present
        let present = false;
        for (let i = 0; i < result.length; i++) {
            present = sameCoins(input, result[i])
            if(present){break;}
        }
        if(!present){
            console.log(input);
            result.push(input);
        }
        else{
            // console.log("The following object was already present",input);
            console.log(input);
        }
    }
    if (cents >= 25) {
        temp = Object.assign({}, input);
        temp.quarters++;
        genAllCoinChange(cents - 25, temp,result)
    }
    if (cents >= 10) {
        temp = Object.assign({}, input);
        temp.dimes++;
        genAllCoinChange(cents - 10, temp,result)
    }
    if (cents >= 5) {
        temp = Object.assign({}, input);
        temp.nickels++;
        genAllCoinChange(cents - 5, temp,result)
    }
    if (cents > 0) {
        temp = Object.assign({}, input);
        temp.pennies = cents;
        genAllCoinChange(0, temp,result);
    }
    return result;
}
var mycents = 26;
const allOptions = genAllCoinChange(mycents);
console.log(allOptions)
// for(let i=0;i<allOptions.length;i++){
//     let sum = 0;
//     for(let coin in allOptions[i]){
//         if(coin==='pennies'){
//             sum += allOptions[i][coin];
//         }
//         if (coin === 'nickels') {
//             sum += (allOptions[i][coin])*5;
//         }
//         if (coin === 'dimes') {
//             sum += (allOptions[i][coin]) * 10;
//         }
//         if (coin === 'quarters') {
//             sum += (allOptions[i][coin]) * 25;
//         }
//     }
//     console.log(`Object #${i}: ${sum}`)
// }

// var option1 = { pennies: 0, nickels: 1, dimes: 2, quarters: 0 }
// var option2 = { pennies: 5, nickels: 0, dimes: 2, quarters: 0 }
// console.log(option1.is(option2))
function sameCoins(option1,option2){
    for (let coin in option1) {
        if(option1[coin]!=option2[coin]){
            return false;
        }
    }
    return true;
}
// sameCoins(option1, option2)