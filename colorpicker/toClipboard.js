/**
 * Created by Rémy Kaloustian on 01/06/2016.
 */

//Is used to copy the color hex to clipboard

$(document).ready(function () {

    var colors = ["#lime", "#green", "#emerald", "#teal", "#cyan", "#cobalt", "#indigo", "#violet", "#pink",
        "#magenta", "#crimson", "#red", "#orange", "#amber", "#yellow", "#brown", "#olive", "#steel", "#green",
        "#mauve", "#sienna", "#grey", "#blue_grey", "#light_grey", "#dark_grey", "#thin_grey", "#solid_grey",
        "#dat_violet", "#midnight_blue", "#soft_orange", "#nice_green",

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