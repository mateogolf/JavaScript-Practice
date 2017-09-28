function gcf(a, b) {//basic, slowest, takes too long on larger numbers with small GCFs
    // if(a==b){return a;}
    // if(a>b){return gcf(a-b,b);}
    // return gcf(a,b-a);
    return a==b?a:a>b?gcf(a-b,b):gcf(a,b-a);
}
function fGCF(a,b){//faster, but can't handle very large numbers with small GCFs
    if(a==b){return a;}
    if(a>b){
        // var smMult = Math.trunc(a/b);
        return gcf(a-(b*Math.trunc(a/b)),b);//smMult),b);
    }
    // var smMult = Math.trunc(b/a);
    return gcf(a,b-(a*Math.trunc(b/a)));//smMult));
}
function fGCF2(a,b){//CAN handle biggest
    // if(a>b){
    //     if(a%b==0){return b;}
    //     return fGCF2(a%b,b);
    //     return a%b==0? b: fGCF2(a%b,b);
    // }
    // if(b%a==0){return a;}
    // return fGCF2(a,b%a);
    // return b%a==0? a: fGCF2(a,b%a);//code if a<=b
    return a>b?(a%b==0? b: fGCF2(a%b,b)):(b%a==0? a: fGCF2(a,b%a));
}

// console.log(gcf(6,15));
// console.log(gcf(125,50));
// console.log(gcf(123456, 987654));
console.log(fGCF2(6, 15));
console.log(fGCF2(125, 50));
console.log(fGCF2(123456, 987654));