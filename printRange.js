//I think I got the basic and the optional parameters down, working on the negatives...
function printRange(start,stop,skip){
    if(stop == undefined && skip == undefined){
        stop = start;
        start = 0;
        skip = 1;
    }
    else if(skip == undefined){
        skip = 1;
    }

    if(skip>0){
        while(start < stop){
            console.log(start);
            start += skip;
        }
    }
    else if(skip<0){
        while(start > stop){
            console.log(start);
            start += skip;
        }
    }
    else{
        console.log(start);
    }
}
console.log("BASIC");
printRange(2,10,2);
console.log("Test no skip par.");
printRange(4, 8);
console.log("Test only end par.");
printRange(4);
console.log("Test negatives1");
printRange(-10,-5,2);
console.log("Test negatives2");
printRange(-5,-10,-2);