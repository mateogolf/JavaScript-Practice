function rollOne(){
    return Math.trunc(Math.random() * 6) + 1;
}
function minC(min, newMin){
    if(min>newMin){return newMin;}
    else{return min;}
}
function maxC(max, newMax){
    if(max<newMax){return newMax;}
    else{return max;}
}

function playStatistics(){
    var temp = rollOne();
    var min = temp;
    var max = temp;
    for(let i=0;i<7;i++){
        temp = rollOne();
        min = minC(min,temp);
        max = maxC(max,temp);
    }
    console.log("MIN: " + min);
    console.log("MAX: " + max);
}
function playStatistics3(num){
    var temp = rollOne();
    var min = temp;
    var max = temp;
    var sum = temp;
    for(let i=0;i<num-1;i++){
        temp = rollOne();
        sum += temp;
        min = minC(min,temp);
        max = maxC(max,temp);
    }
    console.log("MIN: " + min);
    console.log("MAX: " + max);
    console.log("SUM: "+sum);
}
function playStatistics2(){
    playStatistics3(8);
}
function playStatistics4(num){
    var temp = rollOne();
    var min = temp;
    var max = temp;
    var sum = temp;
    for(let i=0;i<num-1;i++){
        temp = rollOne();
        sum += temp;
        min = minC(min,temp);
        max = maxC(max,temp);
    }
    console.log("MIN: " + min);
    console.log("MAX: " + max);
    console.log("AVG: "+ sum/num);
}

console.log(rollOne());
playStatistics();
playStatistics2();
playStatistics3(5);
playStatistics4(7);
