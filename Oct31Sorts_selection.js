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