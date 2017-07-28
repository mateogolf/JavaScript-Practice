function numbersOnly(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            result.push(arr[i]);
        }
    }
    return result;
}
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray);

