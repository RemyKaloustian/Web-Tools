/**
 * Created by Rémy Kaloustian on 03/06/2016.
 */



//Is used to warn the user that Internet Explorer needs thousands of CSS lines to make a font work ;)

function msieversion()
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("This website is not designed to work with Internet Explorer. We recommend using an other browser.");
    }
    else  // If another browser, return 0
    {

    }

    return false;
}


$(document).ready(function () {


   msieversion();

});
