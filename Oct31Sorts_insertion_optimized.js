function insertionSort(arr){
    if(arr.length<2) return arr;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let k=i+1
            let temp = arr[k];
            while(k>0 && arr[k-1]>temp){
                arr[k]=arr[k-1];
                k-=1;
            }
            arr[k]=temp;
            // for (let k = i+1; k>0; k--) {
            //     if(arr[k]<arr[k-1]){
            //         let temp=arr[k];
            //         arr[k]=arr[k-1];
            //         arr[k-1]=temp;
            //     }
            // }
        }
    }
    return arr;
}
let array2 = [2, 3, -4, 10, 4]
insertionSort(array2);
console.log(array2);