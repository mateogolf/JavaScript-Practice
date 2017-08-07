function removeBlanks(str){
    return str.join(str.split(" "));
}
function removeBlanks2(str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}


function getDigits(str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNan(str[i])) {
            newStr += str[i];
        }
    }
    return Number(newStr);
}


function acronyms(str){
    var newStr = "";
    if(str[0] != " "){
        newStr += str[0].toUpperCase();
    }
    for(let i=0;i<str.length;i++){
        if(str[i] == " " && str[i+1] != " "){
            newStr += str[i+1].toUpperCase();
        }
    }
    return newStr;
}
var test = "This is   -   a test, 4 sanity."
console.log(acronyms(test))

