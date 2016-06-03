/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is to manage the popup

$(document).ready(function () {



    var _isPopup;

    $(".main").click(function()
    {
        $("#popup").css("display", "block");
        _isPopup = true;

        console.log("main clicked");

        setTimeout(function()
        {
            $("#popup").fadeOut();
        },1000);

    });


    $("#popup").click(function()
    {
        $("#popup").css("display", "none");
        _isPopup = true;

        console.log("popup clicked");

    });



});//END OF FILE
