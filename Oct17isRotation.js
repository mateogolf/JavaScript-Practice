function rRotateStr(str,num){//Using recursion
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
// console.log(rRotateStr("Boris",2));
// console.log(rRotateStr("Boris", 7));
//Non recursive version
function rotateStr(str, num) {//using splice
    if (num > str.length) { num = num % str.length; }
    if (num == 0) { return str; }
    var front = str.slice(num);
    var back = str.slice(0,num);
    return front + back;
}
// console.log(rotateStr("Boris", 2));
// console.log(rotateStr("Boris", 7));
function isRotation(str1,str2,count=str1.length){
    if (count == str1.length){
        if(str1.length != str2.length){
            console.log("String not equal length")
            return false;
        }
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }
    if(str1===str2){return true;}
    if (count == 0) {
        console.log("Reached end without finding a match")
        return false;}//end of recursion without finding a match
    let strArr = str1.split("");
    let temp = str1[0];
    for(let i=0;i<str1.length-1;i++){
        strArr[i]=strArr[i+1];
    }
    strArr[strArr.length-1]=temp;
    return isRotation(strArr.join(""),str2, count-1);
}
var first = rRotateStr("Boris",2);
var second = "Isbor";
console.log(isRotation(first,second));