function sumToOne(num){
    if(num<10)return num;
    return (num-1) % 9 + 1;
    // var result = 0;
    // while(result == 0 || result > 10){
    //     while(num>0){
    //         result += num % 10;
    //         num = Math.floor(num/10);
    //     }
    //     console.log("First result is:" + result);
    //     if(result>=10){
    //         num = result;
    //         result = 0;
    //     }
    // }
    // return result;
}

console.log(sumToOne(928));
console.log(sumToOne(5000));
console.log(sumToOne(5));
console.log(sumToOne(5371));