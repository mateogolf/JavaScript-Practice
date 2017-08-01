function filter(arr,min,max){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        if(arr[i] <=min || arr[i] >= max){
            console.log("Outside min/max");
            for(let j=i;j<arr.length-1;j++){
                arr[j] = arr[j+1];
            }
            arr.length -= 1;
            i--;
        }
    }
    return arr;
}

testArr = [7,10,5,4,1];
testArr1 = [5,8,9,3,7,6];
console.log(filter(testArr,3,8));
console.log(filter(testArr1,2,8));