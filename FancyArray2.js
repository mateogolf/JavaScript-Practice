function fancyArray(arr,sym="->",reversed=false){
    if((sym == true || sym == false) && reversed ==false){
        reversed = sym;
        sym="->";
    }

    if(reversed){
        for(var i=arr.length-1;i>=0;i--){
        console.log(i + " " + sym + " " + arr[i]);
        }
    }
    else{
        for(var i=0;i<arr.length;i++){
            console.log(i + " " + sym + " " + arr[i]);
        }
    }
}
var arrayTest = ["James", "Jill", "Jane", "Jack"];
console.log("Test Basic");
fancyArray(arrayTest);
console.log("Test Other Options");
fancyArray(arrayTest,"::",true);
fancyArray(arrayTest,"",true);
fancyArray(arrayTest,"::");
fancyArray(arrayTest,false);