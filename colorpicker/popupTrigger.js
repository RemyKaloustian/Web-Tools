/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is used to manage the popup

$(document).ready(function () {


//On click on a color, displaying the popup
    $(".main").click(function()
    {
        $("#popup").css("display", "block");

        $("#popup").animate(
            {
                'margin-left': "15%",
            }, 300, function () {
            });

        console.log("main clicked");

        //Removing the popup
        setTimeout(function()
        {
            $("#popup").css("margin-left", "0px");
            $("#popup").fadeOut();

        },1000);



    });


    //removing the popup when clicking on it
    $("#popup").click(function()
    {
        $("#popup").css("display", "none");
        $("#popup").css("margin-left", "0px");

        console.log("popup clicked");

    });


});//END OF FILE
