function compoundReward(days,total){
    var sum = 0;
    if(days > 0){
        for(var i = 1, income=1;i<=days;i++,income *= 2){
            sum += income;
            if(total != undefined){
                if((sum/100) >= total){
                    return "It takes only " + i + " days of the estimate " + days + " days to reach $" + total;
                }
            }
        }
        if(total != undefined){
                if((sum/100) < total){
                    return "It takes more than " + (i-1) + " days to reach $" + total;
                }
            }
        return "The total reward after " + days + " days is: $" + (sum/100);
    }
    else if(total != undefined && days == 0){
        for(var j=1, income=1;(sum/100)<total;j++,income *= 2){
            sum += income;
            if((sum/100)>=total){
                return "It takes " + j + " days to reach $" + total;
            }
        }
    }
}
console.log(compoundReward(30));
console.log(compoundReward(0,10000));
console.log(compoundReward(0,1000000000));
console.log(compoundReward(30,10000));
console.log(compoundReward(30,1000000000));