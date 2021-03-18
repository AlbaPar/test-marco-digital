$ (document).ready(function() {
    
    //Detectar click de pantalla
$("#touchable-zone").on("click", function () {
    fpanelIsOpen = !fpanelIsOpen;
    if (fpanelIsOpen)
        $(".functions-panel").css("transform", "translate(0,0)");
    else
        $(".functions-panel").css("transform", "translate(0,100px)");
});
    
    
    //Botones del menú
    $("#fbtn0").on("click", function() {
        ChangeMenu(0);
    });
    $("#fbtn1").on("click", function() {
        ChangeMenu(1)
    });
    $("#fbtn2").on("click", function() {
        ChangeMenu(2);
    });
    $("#fbtn3").on("click", function() {
        ChangeMenu(3);
    });
    $("#fbtn4").on("click", function() {
        ChangeMenu(4);
    });
    ChangeMenu(0);
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
var fpanelIsOpen = false;


function ChangeMenu (i) {
    menuIndex = i;
    if (menuIndex == 0) {
        $(".photos-panel").css("visibility", "visible");
        $(".chrono-menu").css("opacity","0");
        $(".main-clock-menu").css("opacity","0");
        $(".options-menu").css("opacity", "0");
        $(".sticky-notes-menu").css("opacity","0");
    }
    else if (menuIndex == 1) {
        $(".photos-panel").css("visibility", "hidden");
        $(".options-menu").css("opacity", "1");
        $(".chrono-menu").css("opacity","0");
        $(".main-clock-menu").css("opacity","0");
        $(".sticky-notes-menu").css("opacity","0");
    } else if (menuIndex == 2) {
        $(".photos-panel").css("visibility", "hidden");
        $(".options-menu").css("opacity", "0");
        $(".chrono-menu").css("opacity","0");
        $(".main-clock-menu").css("opacity","1");
        $(".sticky-notes-menu").css("opacity","0");
    }
    else if (menuIndex == 3) {
        $(".photos-panel").css("visibility", "hidden");
        $(".options-menu").css("opacity", "0");
        $(".chrono-menu").css("opacity","1");
        $(".main-clock-menu").css("opacity","0");
        $(".sticky-notes-menu").css("opacity","0");
    }
    else if (menuIndex == 4) {
        $(".photos-panel").css("visibility", "hidden");
        $(".options-menu").css("opacity", "0");
        $(".chrono-menu").css("opacity","0");
        $(".main-clock-menu").css("opacity","0");
        $(".sticky-notes-menu").css("opacity","1");
    }
    
    
    for (var j = 0; j < 5; j++) {
        if (j == i) {
            $("#fbtn"+j.toString()).css("color", "#303F9F");
        }
        else {
            $("#fbtn"+j.toString()).css("color", "#212121");
        }
    }
    setTimeout(function() {
        $(".functions-panel").css("transform", "translate(0,100px)");
        fpanelIsOpen = false;
    }, 250);
}





