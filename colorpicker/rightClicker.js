/**
 * Created by Rémy Kaloustian on 21/04/2016.
 */

///Is used to scroll to top when a color is clicked

$(document).ready(function () {

    $('.color_div').click(function(event)
    {
        var the_id = $(this).attr("href"); //On localise la cible de l'ancre

        $('html, body').animate( //--> On anime en faisant un scroll slow jusqu'? la cible
            {
                scrollTop:$(the_id).offset().top
            }, 'slow');

        $("#selected").html("Selected color : " + $(this).attr("data-internalid").toString());
        $("#selected").css("color" , $(this).attr("data-internalid").toString());

        //Part where we copy to clipboard...IS SHYTE

        /* var $temp = "Blabla";
         $("body").append($temp);
         $temp.val("Blablabla").select();
         document.execCommand("copy");
         $temp.remove();
         console.log("copied");*/

        return false;
    });


});