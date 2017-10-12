// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
// Binary String Expansion (p 103) 10/4/17 (v. 1.5 - works, suboptimal)
// bSE("0?1?") => ["0010", "0011", "0110", "0111"]
function bSE(str) {
    var result = [];
    var idx = 0;
    var newStr = "";
    while (idx < str.length) {
        rBSE(str, newStr, idx, result)
        idx++;
    }
    return result;
}

function rBSE(str, newStr, idx, result) {
    if (idx === str.length) {
        // This is a 'jankey' solution -- the function
        // should be written to stop running once
        // all options exhausted...
        if (newStr.length === str.length) {
            result.push(newStr);
            return;
        }
    }
    else {
        if (str[idx] != "?") {
            newStr += str[idx];
            //console.log(newStr);
            idx++;
            rBSE(str, newStr, idx, result)
        }
        else {
            idx++;
            rBSE(str, newStr + "0", idx, result)
            rBSE(str, newStr + "1", idx, result)
        }
    }
}

// test = "10?1?";
// console.log(bSE(test));


// function strAnagram(str){
//     if(str.length == 0){return [];}
//     if (str.length == 1) { return [str]; }
//     var result = [];
//     var idx = 0;
//     var newStr = "";
//     console.log(newStr.length);
//     while(idx+1<str.length){
//         rAna(str, newStr, idx, result);
//         idx++;
//     }
//     return result;
// }
// function rAna(str, newStr, idx, result) {
//     if (idx >= str.length && newStr.length >= str.length) {
//         result.push(newStr);
//         return;
//     }
//     if(newStr.length==0){
//         var first = newStr + str[idx] + str[idx+1];
//         console.log(first);
//         newStr += str[idx + 1] + str[idx];
//         console.log(newStr);
//     }else{

//     }
//     idx++;
//     rAna(str, first, idx, result);
//     rAna(str, newStr, idx, result);
// }
function shiftCharsInString(str) {
    if(str.length == 0){return [];}
    const result = [];//add str to result
    if (str.length == 1) { return [str]; }
    
    //split str
    const strArr = str.split("");
    // console.log(strArr);
    //shift first to last and add result
    for(let i=0;i<str.length;i++){
        if(i==0){
            result.push(str);
            continue;
        }
        strArr.push(strArr.shift());//shift
        // console.log(strArr);
        // console.log(strArr.join(""));
        result.push(strArr.join(""));
        console.log(result);
    }

    return result;
}
// console.log(strAnagram("lim"));
function rFact(num) {
    num = Math.trunc(num);
    if (num <= 1) { return 1; }
    // var result = num * rFact(num - 1);
    // console.log("rFact(" + num + "): " + result);
    return num * rFact(num - 1);//result;
}
function strAnagram(str) {
    if (str.length == 0) { return []; }
    const result = [str];//add str to result
    // if (str.length == 1) { return [str]; }
    // return rFact(str.length);
    var strArr = str.split("");
    var currentChar = 0;
    while(result.length <rFact(str.length)){
        function rShiftChar(arr=strArr,currentChar,iteration,forward=true){
            if(forward){
                //shift 
                let newStr = "";
            }

            
            currentChar
        }
    }

}
//move index from current location to original

// console.log(strAnagram("lims"));
//if 1: no movement
//if 2: move once
//if 3: move twice for each char
function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++){
        console.log(i+":");
        buffer.push(ToggleLetters(str, index, i));}
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    console.log(str.join(""))
    return str.join("");
}

console.log(FindAllPermutations("lim"));