function URLify(str){
    //replace all spaces in string with %20
    //Using .replace
    // return str.replace(" ","%20");
    //Without methods
    var newStr = "";
    for(let i=0;i<str.length;i++){
        if(str[i] == " "){newStr += "%20";}
        else{newStr += str[i]}
    }
    return newStr;
}
function isPalindromePermutation(str){
    //lowercase=> .lowercase()
    str = str.lowercase();
    //remove spaces => .trim()
    str = str.trim();
    //Determine if odd or even, odd length means one character can have 
    if(str.length % 2 ==0){
        var isOdd=0;
    }
    else{var isOdd=1}
    var strArr = str.split(" ");//split
    // strArr.sort();//sort characters
    //Loop through string
    for(let i=0;i<str.length;i++){
        //count how many times this value appears
        for(let k=i;k<str.length;k++){
            //add count if same as current char
        }
        if(count % 2 !=0){
            if(isOdd==1){
                isOdd=0;
            }
            else{
                return false;
            }
        }
    }
}