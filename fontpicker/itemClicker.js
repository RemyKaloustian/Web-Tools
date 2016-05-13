/**
 * Created by Rémy Kaloustian on 13/05/2016.
 */
$(document).ready(function () {

    //$(".color_div").css("color",$(this).attr("data-internalid").toString())

    $('.font_item').click(function (event) {
        var fontName = $(this).attr("data-font").toString()


        $("#huge_title").css("fontFamily", fontName);
        $("#victim_title").css("fontFamily", fontName);
        $("#text_title").css("fontFamily", fontName);


        return false;
    });


});