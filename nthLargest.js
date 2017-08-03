function drift(arr,idx){
        for (var x = idx; x < arr.length; x++){
            arr[x] = arr[x+1];
        }
        arr.pop();
        return arr
    }

function nthlargest(arr, n){
  var newarr = [];
  var max = arr[arr.length-1];
  var idx = arr.length-1;
    for (var outer= 0; outer < n; outer++){
        for (var inner=arr.length-2; inner >= 0; inner--){ 
            if (arr[inner] > max){
                max = arr[inner];
                idx = inner;
            }
        }
        console.log(arr);
        newarr.push(max);
        console.log(newarr);
        for (var x = idx; x < arr.length; x++){
            arr[x] = arr[x+1];
        }
        arr.pop();
        max = arr[arr.length-1];
        idx = arr.length-1;
    }
    console.log (newarr[n-1]);
}

nthlargest([10,14,-5,9], 3);