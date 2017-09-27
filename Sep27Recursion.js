// Recursion
function rSigma(num){
    num = Math.trunc(num);
    if(num<=0){return 0;}
    if(num==1){return 1;}
    // var result = num + rSigma(num - 1);
    // console.log("rSigma(" + num + "): " + result);
    return num + rSigma(num - 1);//result;
}
function rFact(num){
    num = Math.trunc(num);
    if (num <= 1) { return 1; }
    // var result = num * rFact(num - 1);
    // console.log("rFact(" + num + "): " + result);
    return num * rFact(num - 1);//result;
}
function rFib(num){
    num = Math.trunc(num);
    if (num <= 0) { return 0; }
    if (num == 1) { return 1; }
    // var result = rFib(num - 1) + rFib(num - 2);
    // console.log("rFib("+num+"): "+result);
    return rFib(num - 1) + rFib(num - 2);//result;
}
console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(-1));
console.log(rFact(-1));
console.log(rFact(3));
console.log(rFact(6.5));
console.log(rFib(6));
console.log(rFib(3.65));
console.log(rFib(-2));