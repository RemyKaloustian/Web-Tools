/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is used to copy the color hex to clipboard

$(document).ready(function () {


    $(".main").css("backgroundColor", $(".main").attr("data-internalid").toString());


    var clipboard = new Clipboard('.main', {
        text: function () {
            return $(".main").data("text");
        }
    });

});