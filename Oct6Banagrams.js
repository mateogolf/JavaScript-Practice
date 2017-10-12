// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
function strAnagrams(str,idx=0,end=(str.length-1),result=[]) {
    if(str.length == 0){return [];}
    if (str.length == 1) { return [str]; }
    if(idx==end){
        result.push(str);//console.log(str);
    }
    else{
        for (let i = idx; i <= end; i++) {
            str = swap(str,idx,i);
            strAnagrams(str,idx+1,end,result);
            str = swap(str,idx,i);
        }
    }
    return result;
}
function swap(str,index1,index2){
    var strArr = str.split("");
    var temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
    return strArr.join("");

}
console.log(strAnagrams("lim"));