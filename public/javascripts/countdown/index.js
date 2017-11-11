/**
 * Created by Javier on 10/06/2017.
 */

var countDownDate = new Date().getTime() + 1000*60*30;

/*setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(seconds < 0) document.getElementById("countdown").innerHTML = "00:00";
    else {
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
    }

},200);*/

setInterval(function() {
    $.getJSON("/getTime", function(data){
        countDownDate = data["time"];
        now = new Date().getTime();
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        document.getElementById("countdown").innerHTML = minutes + ":" + seconds;    });
}, 200);