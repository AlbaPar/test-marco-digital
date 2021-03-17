$ (document).ready(function() {
    
    
    
    //Hacer que funcione Update()
    var update = setInterval(Update, 10);
    
    //Cambiar imagen
    var imgInterval = setInterval(ImageInterval, 5000);
});

var imgIndex = 0;

function Update () {
    //Establecer hora del reloj
    var date = new Date();
    var hh = "00".substring(date.getHours().toString().length) + date.getHours().toString();
    
    var mm ="00".substring(date.getMinutes().toString().length) + date.getMinutes().toString();
    
    var ss = "00".substring(date.getSeconds().toString().length) + date.getSeconds().toString();
    var time = hh + ":" + mm;
    $(".clock").html(time);
    $(".secs").html(ss);
    
    
    //Establecer hora del reloj principal
    
    var dia = date.getUTCDay();
    var diaEsp = "";
    if (dia == 1) diaEsp = "LUN";
    else if (dia == 2) diaEsp = "MAR";
    else if (dia == 3) diaEsp = "MIE";
    else if (dia == 4) diaEsp = "JUE";
    else if (dia == 5) diaEsp = "VIE";
    else if (dia == 6) diaEsp = "SÁB";
    else if (dia == 7) diaEsp = "DOM";
        
    console.log(dia);console.log(diaEsp);
    $("#dia").html(diaEsp);
    $("#horas").html(hh);
    $("#minutos").html(mm);
    $("#segundos").html(ss);
}

function ImageInterval () {
    imgIndex += 1;
    if (imgIndex == 11)
        imgIndex = 0;
    $(".main-img").toggleClass("transparent");
    $(".second-img").toggleClass("transparent");
    if ($(".main-img").hasClass("transparent")) {
       $(".second-img").attr("src", "img/" + imgIndex.toString() + ".jpg"); 
    } else {
        $(".main-img").attr("src", "img/" + imgIndex.toString() + ".jpg");
    }
    setTimeout(function() {
        $("body").css("background-image", "url(\"img/" + imgIndex.toString() + ".jpg\")");
    }, 250);
    
}


var menuIndex = 0;
//Detectar click de pantalla
$(document).on("click", function () {
    
    menuIndex += 1;
    if (menuIndex == 4)
        menuIndex = 0;
    
    if (menuIndex == 0) {
        $(".photos-panel").css("visibility", "visible");
        $(".dev-info-menu").css("opacity","0");
        $(".main-clock-menu").css("opacity","0");
        $(".options-menu").css("opacity", "0");
    }
    else if (menuIndex == 1) {
        $(".options-menu").css("opacity", "1");
    } else if (menuIndex == 2) {
        $(".photos-panel").css("visibility", "hidden");
        $(".options-menu").css("opacity", "0");
        $(".main-clock-menu").css("opacity","1");
    }
    else if (menuIndex == 3) {
        $(".main-clock-menu").css("opacity","0");
        $(".dev-info-menu").css("opacity","1");
    }
});






