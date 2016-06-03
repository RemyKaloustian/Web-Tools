/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is to manage the popup

$(document).ready(function () {




    $(".main").click(function()
    {
        $("#popup").css("display", "block");

        $("#popup").animate(
            {
                'margin-left': "15%",
            }, 300, function () {
                //$(this).css("padding-left", "50px");
            });

        console.log("main clicked");

        setTimeout(function()
        {
            $("#popup").css("margin-left", "0px");
            $("#popup").fadeOut();

        },1000);



    });


    $("#popup").click(function()
    {
        $("#popup").css("display", "none");
        $("#popup").css("margin-left", "0px");

        console.log("popup clicked");

    });



});//END OF FILE
