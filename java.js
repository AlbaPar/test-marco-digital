$ (document).ready(function() {
    
    
    
    //Hacer que funcione Update()
    var update = setInterval(Update, 10);
});

function Update () {
    //Establecer hora del reloj
    var date = new Date();
    var hh = "00".substring(date.getHours().toString().length) + date.getHours().toString();
    
    var mm ="00".substring(date.getMinutes().toString().length) + date.getMinutes().toString();
    
    var ss = "00".substring(date.getSeconds().toString().length) + date.getSeconds().toString();
    var time = hh + ":" + mm;
    $(".clock").html(time);
    $(".secs").html(ss);
}