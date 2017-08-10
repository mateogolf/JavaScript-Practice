function isAlphabetical(str){
    return (str.split('').sort().join('') == str)
}
function isAlphabetical1(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] > str[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isAlphabetical("abcdefg"))

console.log(isAlphabetical("arsen"))