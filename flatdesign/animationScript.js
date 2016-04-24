/**
 * Created by Rémy Kaloustian on 22/04/2016.
 */
$(document).ready(function() {

    $( window ).resize(function() {
        if($(window).width() < 1043)
        {
            $("#home_icon").css("display", "block");
            $("#home_icon").css("margin-left", "auto");
            $("#home_icon").css("margin-right", "auto");
            console.log("Resizing");

        }

        else if($(window).width() > 1043)
        {
            $("#home_icon").css("display", "block");
            $("#home_icon").css("margin-left", "0");
            $("#home_icon").css("margin-right", "0");
            console.log("Resizing");

        }
    });





});