$(document).ready(function () {
    $(".navbar-fundo").css("background-color", "transparent");
    $(".navbar-fundo").css("opacity", "1.0");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar-fundo").css("background-color", "#000");
            $(".navbar-fundo").css("opacity", "0.5");
        } else {
            $(".navbar-fundo").css("background-color", "transparent");
            $(".navbar-fundo").css("opacity", "1.0");
        }
        
        $(".navbar-toggler").css("background-color","#fff");
        $(".navbar-expand-lg").css("background-color","000");
        $(".navbar-expand-lg").css("opacity","0.7");
    })
    
    $(".navbar-toggler").css("background-color","#FFF");
    $(".navbar-expand-lg").css("background-color","transparent");
    $(".navbar-expand-lg").css("opacity","0.7");
})
