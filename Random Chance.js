function randomChance(quarters,leave,minleft=0){
    if(leave == undefined || (leave < quarters && minLeft == undefined)){
        if(leave < quarters && minLeft == 0){
            minleft = leave;
        }

        while(quarters>minleft){
            //determine if won
            quarters-=1;
            var won =  Math.floor(Math.random() * 101); //1 in 100 chance of winning
            if(won == 100){
                //determine how much
                var winnings = Math.floor(Math.random() * 100) + 50; //wins between 50 and 100 quarters
                console.log("You won with [" + quarters + "] left. You winnings are: [" + winnings + "] quarters");
                return quarters + winnings;
            }
            console.log("You lost with [" + quarters + "] left.");
            
        }
        return minleft;
    }
    else{
        while(quarters<leave && quarters > minleft){
            //determine if won
            quarters-=1;
            var won =  Math.floor(Math.random() * 101); //1 in 100 chance of winning
            if(won == 100){
                //determine how much
                var winnings = Math.floor(Math.random() * 100) + 50; //wins between 50 and 100 quarters
                console.log("You won with [" + quarters + "] left. You winnings are: [" + winnings + "] quarters");
                quarters += winnings;
            }
            if(quarters>=leave){
                return quarters;
            }
            console.log("You lost with [" + quarters + "] left.");
        }
        return minleft;
    }
}
console.log(randomChance(100,200));
console.log(randomChance(50,20));
console.log(randomChance(100,200,40));