/**
 * Created by Rémy Kaloustian on 13/05/2016.
 */
$(document).ready(function () {

    //$(".color_div").css("color",$(this).attr("data-internalid").toString())

    $('.font_item').click(function (event) {
        var fontName = $(this).attr("data-font").toString();

        // var downloadName = $(this).attr("data-load").toString();

        $("#content_div").fadeOut("slow", function () {
            $("#huge_title").css("fontFamily", fontName);
            $("#victim_title").css("fontFamily", fontName);
            $("#text_title").css("fontFamily", fontName);

            $("#download").css("fontFamily", fontName);
            $("#download").text("Download " + $(event.target).text());
            $("#download").attr("href", "fonts/" + $(event.target).attr("data-load").toString())


        });

        $("#content_div").fadeIn("slow", function () {


        });


        return false;
    });


});