/**
 * Created by Rémy Kaloustian on 13/05/2016.
 */


$(document).ready(function () {
    var palette = "mobile";

    $("#desktop_section").css("display", "none");

    //$(".color_div").css("backgroundColor",$(".color_div").attr("data-internalid").toString());

    $(".color_div").each(function () {
        $(this).css("backgroundColor", $(this).attr("data-internalid").toString());
    });

    $("#palette_switcher").change(function () {

        console.log("Switched");
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


});