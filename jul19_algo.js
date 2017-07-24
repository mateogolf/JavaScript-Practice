// function Fizzbuzz()
// {
//     for(var i = 1;i<=100;i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             var str = "";
//             if(i % 3 == 0){
//                 str = "Fizz";
//             }
//             if(i % 5 == 0){
//                 str += "Buzz";
//             }
//             console.log(str);
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// Fizzbuzz();

function REV(arr)
{
    for(var i = arr.length-1, pos = 0; i>pos; i--,pos++){
        var temp = arr[pos];
        arr[pos] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(REV([3,1,6,4,2]));
console.log(REV([3,1,6,4,10,5,1,2]));

function reverseArray(arr){
    var result = [];
    for(var i = arr.length-1; i>=0; i--){
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray([3,1,6,4,2]));
console.log(reverseArray([3,1,6,4,10,5,1,2]));