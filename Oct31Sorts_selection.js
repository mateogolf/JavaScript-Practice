function bubbleSort(arr,k=0){
    if (arr.length < 2) return arr;
    let sorted = false;
    for (let i = 0; i < arr.length-k; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i + 1]=temp;
            sorted=true;
        }
        // console.log(`POS:${i}`, arr)
    }
    return sorted?bubbleSort(arr,k+1):arr;
}
// let array1 = [2, 3, -4, 10, 4, 0]
// bubbleSort(array1)
// console.log(array1);

function insertionSort(arr){
    if(arr.length<2) return arr;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            for (let k = i+1; k>0; k--) {
                if(arr[k]<arr[k-1]){
                    let temp=arr[k];
                    arr[k]=arr[k-1];
                    arr[k-1]=temp;
                }
            }
        }
    }
    return arr;
}
// let array2 = [2, 3, -4, 10, 4]
// insertionSort(array2);
// console.log(array2);
function selectionSort(arr,current=0){
    if(current>=arr.length-1) return arr;
    //find min
    let minLoc=current;
    for(let i=current+1;i<arr.length;i++){
        if (arr[minLoc]>arr[i]) minLoc=i;
    }
    // console.log(`currVal:${arr[current]}, min:${arr[minLoc]}`)//illustrates that it works as selection sort
    //switch with beginning
    if(minLoc!=current){
        let temp=arr[current];
        arr[current]=arr[minLoc];
        arr[minLoc]=temp;
    }
    //restart at next element
    return selectionSort(arr,current+1);
}
let array3 = [2, 3, -4, 10, 4,0];
selectionSort(array3)
console.log(array3)