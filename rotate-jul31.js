function rotateArr(arr,shiftBy){
    if(shiftBy> arr.length || shiftBy < 0 || arr.length == 0){
        console.log("You input was flawed.  No change to array.");
        return arr;
    }
    var temp;
    for(let i = 0; i < shiftBy;i++){
        // console.log(i);
        temp = arr[arr.length - 1];
        for(let j = arr.length - 2; j >= 0;j--){
            arr[j+1] = arr[j];
            // console.log(arr[j+1]);
        }
        arr[0] = temp;
    }
    return arr;
}

var testArr = [3,5,2,8,1,"ten"];

console.log(rotateArr(testArr,3));
console.log(rotateArr(testArr,2));
// console.log(rotateArr(testArr,10));
console.log(rotateArr([],0));