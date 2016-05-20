/**
 * Created by Rémy Kaloustian on 13/05/2016.
 */

/// Is used for the color selection, the color hovering


$(document).ready(function () {

//Default palette is mobile
    var palette = "mobile";

    //Not displaying teh desktop colors section
    $("#desktop_section").css("display", "none");

    //On hover, the color is the data-internalid
    $(".color_div").hover(function () {
        $(this).css("color", $(this).attr("data-internalid").toString());

    });

    //On leave, we go back to the basic color and background
    $(".color_div").mouseleave(function () {
        $(this).css("color", "#f5f5f5");
        $(this).css("backgroundColor", $(this).attr("data-internalid").toString());

    });


    //Setting the background for each color_div, using teh internalid
    $(".color_div").each(function () {
        $(this).css("backgroundColor", $(this).attr("data-internalid").toString());
    });

    //When the switcher is used
    $("#palette_switcher").change(function () {

        console.log("Switched");
        //If current palette is mobile, going to desktop
        if (palette == "mobile") {
            console.log("In Mobile, to desktop");

            palette = "desktop";
            $("#mobile_section").fadeOut("slow", function () {
                //$("#desktop_section").css("display", "block");
            });

            $("#desktop_section").fadeIn("slow", function () {
                // Animation complete.
            });

            $("#palette_text").text("Background colors and Desktop");


        }
        //Else, going to mobile
        else if (palette == "desktop") {
            console.log("In Desktop, to mobile");
            palette = "mobile";

            $("#desktop_section").fadeOut("slow", function () {
                // Animation complete.
            });

            $("#mobile_section").fadeIn("slow", function () {

            });

            $("#palette_text").text("Foreground colors and Mobile");
        }
    });

});//END OF FILE