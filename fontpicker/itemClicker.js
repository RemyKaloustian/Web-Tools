/**
 * Created by Rémy Kaloustian on 13/05/2016.
 */
$(document).ready(function () {

    $('.font_item').hover(function (event) {
        $(this).animate(
            {
                'padding-left': "50px",
            }, 300, function () {
                //$(this).css("padding-left", "50px");
            });
    });

    $('.font_item').mouseleave(function (event) {
        $(this).animate(
            {
                'padding-left': "5px",
            }, 60, function () {
                //$(this).css("padding-left", "5px");
            });
    });


    //Managing the text font size according to the width
    if ($(window).width() < 1800) {
        $("#text_title").css("font-size", 19);

    }

    if ($(window).width() < 1600) {
        $("#text_title").css("font-size", 16);

    }

    //Changing on click
    $('.font_item').click(function (event) {
        //Getting the font name
        var fontName = $(this).attr("data-font").toString();

        //Setting the font to the selected font
        $("#content_div").fadeOut("slow", function () {
            $("#huge_title").css("fontFamily", fontName);
            $("#victim_title").css("fontFamily", fontName);
            $("#text_title").css("fontFamily", fontName);

            $("#download").css("fontFamily", fontName);
            $("#download").text("Download " + $(event.target).text());
            $("#download").attr("href", "fonts/" + $(event.target).attr("data-load").toString());

        });

        $("#content_div").fadeIn("slow", function () {

        });


        return false;
    });

});//END OF FILE