var HOUR = 8;
var MINUTE = 20;
var PERIOD = "PM";

function time(h,m,per){
    var str = "It's ";
    if(h == 12 && m == 0){
        if(per == "AM"){
            str += "midnight";
            console.log(str);
        }
        else{
            str += "noon";
            console.log(str);
        }
        return false;
    }
    if(m < 30){
        str += "just after " + h;
    }
    else if(m > 30){
        if(h == 12){
            h = 1;
            str += "almost " + h;
        }
        else{
        str += "almost " + (h+1);
        }
    }
    else{
        str += "half past " + h;
    }
    if(per == "AM"){
        str += " in the morning";
    }
    else{
        str += " in the evening";
    }
    console.log(str);
}
time(HOUR,MINUTE,PERIOD);
time(12,00,"AM");
time(12,00,"PM");
