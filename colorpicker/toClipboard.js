/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is used to copy the color hex to clipboard

$(document).ready(function () {

    var colors = ["#lime", "#green", "#emerald", "#teal", "#cyan", "#cobalt", "#indigo", "#violet", "#pink",
        "#magenta", "#crimson", "#red", "#orange", "#amber", "#yellow", "#brown", "#olive", "#steel", "#green",
        "#mauve", "#sienna", "#grey", "#blue_grey", "#light_grey", "#dark_grey", "#thin_grey", "#solid_grey",
        "#dat_violet", "#midnight_blue", "#soft_orange", "#nice_green",


        "#red2", "#pink2", "#purple", "#deep_purple", "#indigo2", "#blue2", "#light_blue", "#cyan2",
        "#teal2", "#green2", "#light_green", "#lime2", "#yellow2", "#amber2", "#orange2", "#deep_orange",
        "#brown2", "#grey2", "#dark_brown", "#strong_pink", "#soft_pink", "#not_so_turquoise", "#bold_red", "#sad_purple",
        "#beige", "#sad_green", "#shadow_grey", "#almost_strong_pink", "#flatest_violet", "#sad_orange", "#happy_blue",
        "#orose", "#sad_blue", "#nature_green", "#sky_blue", "#super_happy_blue"

    ];

    colors.forEach(function (item) {
        var clipboard = new Clipboard(item, {
            text: function () {
                return $(item).data("internalid");
            }
        });
    });


    /*var clipboard = new Clipboard('.main', {
        text: function () {
     return $(".main").data("internalid");
        }
    });


     var clipboard2 = new Clipboard('#lime', {
     text: function () {
     return $("#lime").data("text");
     }
     });*/

});