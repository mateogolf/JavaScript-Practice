function isUnique(str){

}

function isPermutation(str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        for(let k=0;k<str2.length;k++){
            var found = false;
            if(str1[i] == str2[k]){
                found = true;
                str2 = str2.slice(0,k) + str2.slice(k+1,str2.length);
                break;
            }
        }
        if (!found) { return false; }
    }
    return true;

    // var arr1 = str1.split("");
    // var arr2 = str2.split("");
    // arr1.sort();
    // arr2.sort();
    // str1 = arr1.join();
    // str2 = arr2.join();
    // if(str1==str2){
    //     return true;
    // }
    // return false;
}

var str1 = "abbcd";
var str2 = "abccd";
var str3 = "abcbd";
console.log(isPermutation(str1,str2));
console.log(isPermutation(str1, str3));