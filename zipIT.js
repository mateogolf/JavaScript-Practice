function zipIT(arr1,arr2){
    var result =[]
    if(arr1.length >= arr2.length){
        var longest = arr1.length;
    }
    else{
        var longest = arr2.length;
    }
    for(let i=0;i<longest;i++){
        if(i<arr1.length){
            result[result.length] = arr1[i];
        }
        if(i<arr2.length){
            result[result.length] = arr2[i];
        }
    }
    return result;
}

var a1 = [1,2,3,4]
var a2 = ["a","b","c","d","e",'f']
console.log(zipIT(a1,a2))
console.log(zipIT(a2,a1))