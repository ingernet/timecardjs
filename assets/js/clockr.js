$(function() {

    function splitInput(inputId){
        return inputId.split(":");
    }

    $('.clockr').timepicker({
        'step': 15,
        'minTime': '4:30am',
        'maxTime': '11:00pm'
    }).on("change",function() {

        if ($("#time-in").val().length && $("#time-out").val().length) {
            timeInRaw = splitInput($("#time-in").val());
            timeOutRaw = splitInput($("#time-out").val());
            var timein = new Date(2000, 0, 1, timeInRaw[0], timeInRaw[1]);
            var timeout = new Date(2000, 0, 1, timeOutRaw[0], timeOutRaw[1]);
            var t = (timeout - timein) / 1000;
            var q = (t/3600).toFixed(2);
            $("#totaltime").text(q);
            if( q < 0 ) {
                $("#totaltime").addClass("error");
            } else {
                $("#totaltime").removeClass("error");
            }
            
        }
    });
});
