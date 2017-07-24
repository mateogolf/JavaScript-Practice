var daysUntilMyBirthday = 60;

function countdownBday(d){
    for(var days=d;days>=0;days--){
        if(days > 30){
            console.log(days + " days until my birthday.  :(");
        }
        else if(days <= 30){
            if(days>=5){
                console.log(days + " days until my birthday.  It's almost HERE!");
            }
            else if(days<5 && days != 0){
                console.log(days + " days until my birthday. LESS THAN A WEEK!!!!!");
            }
            else{
                console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
                console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
                console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
            }

        }
    }
}
countdownBday(daysUntilMyBirthday);