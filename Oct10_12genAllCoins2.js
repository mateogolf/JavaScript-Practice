// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
function leastCoins(cents, temp,coinVal){//,result=[]) {// = Object.assign({}, template)){
    if(cents==0){
        return temp;
    }
    // if (cents >= 25 && coinVal==25) {
    //     temp.quarters += 1;
    //     // console.log(cents % 25);
    //     leastCoins(cents % 25, temp)//,result);
    // }
    if (cents >= 10 && coinVal>10) {
        temp.dimes += 1;
        // console.log(cents % 10);
        leastCoins(cents % 10, temp)//,result);
    }
    else if (cents >= 5 && coinVal > 5) {
        temp.nickels += 1;
        // console.log(cents % 5);
        leastCoins(cents % 5, temp)//,result);
    }
    else if (cents >= 0) {
        // console.log(temp);
        temp.pennies = cents;
        console.log(temp);
        // // result.push(temp);
        return temp;
        // result.push(temp);
        // console.log(result);
    }
}
function genAllCoinChange(cents, result = []) {
    const options={quarters:25,dimes:10,nickels:5,pennies:1};
    const template = { pennies: 0, nickels: 0, dimes: 0, quarters: 0 };
    for(let coin in options){
        let temp = Object.assign({}, template)
        while(cents>=options[coin]){
            temp[coin]++;
            result.push(leastCoin(cents-options[coin], temp, options-1))
            console.log(temp);
        }
    }
    // var template = { pennies: 0, nickels: 0, dimes: 0, quarters: 0 };
    // var temp = Object.assign({}, template);
    // result.push(leastCoins(cents, temp));
    // return result;
}
console.log(genAllCoinChange(25));