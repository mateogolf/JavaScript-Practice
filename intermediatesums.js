function intersums(arr){
    var count = 0;
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        count ++;
        sum += arr[i];
        if (count == 10){
            for(let j = arr.length; j >i; j--){
                arr[j] = arr[j-1];
            }
            arr[i +1] = sum;
            sum = 0;
            i ++
            count = 0;
        }
    }
    if (count > 0){
        arr[arr.length] = sum;
    }
    return arr;
}

console.log(intersums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))