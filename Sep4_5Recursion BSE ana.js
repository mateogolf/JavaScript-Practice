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

test = "011?";
console.log(bSE(test));