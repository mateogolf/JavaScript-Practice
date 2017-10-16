function rRotateStr(str,num){
    if(num>str.length){num = num%str.length;}
    if(num==0){return str;}
    var strArr = str.split("");
    var temp = str[0];
    for(let i=0;i<str.length-1;i++){
        strArr[i]=strArr[i+1];
    }
    strArr[strArr.length-1]=temp;
    return rRotateStr(strArr.join(""),num-1);
}
console.log(rRotateStr("Boris",2));
console.log(rRotateStr("Boris", 7));
//Non recursive version
function rotateStr(str, num) {
    if (num > str.length) { num = num % str.length; }
    if (num == 0) { return str; }
    var front = str.slice(num);
    var back = str.slice(0,num);
    return front + back;
}
console.log(rotateStr("Boris", 2));
console.log(rotateStr("Boris", 7));