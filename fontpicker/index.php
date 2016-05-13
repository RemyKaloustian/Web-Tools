<?php
include 'utils.php';
?>

<?php
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Font Picker</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="fonts.css">
        <link rel="stylesheet" type="text/css" href="hover-min.css">


</head>
<body>

    <h1 class="centered" id="title">Font Picker</h1>
    <img src="boss.png" id="boss" >
    <h4 class="centered" id="subtitle">Use fonts like a boss.</h4>

    <p class="centered" id="scroll">Scroll down mate.</p>';
?>


<?php
DisplayContainer("Edmond Sans Regular", "fonts/Edmondsans-Regular.otf", "edmond");
DisplayContainer("Edmond Sans Bold", "fonts/Edmondsans-Bold.otf", "edmondBold");
DisplayContainer("Proxima Nova", "fonts/Proxima.otf", "proxima");
DisplayContainer("Raleway Light", "fonts/Raleway-Light.ttf", "ralewayLight");
DisplayContainer("Raleway Regular", "fonts/Raleway-Regular.ttf", "ralewayRegular");
DisplayContainer("Raleway Bold", "fonts/Raleway-Bold.ttf", "ralewayBold");
DisplayContainer("Open Sans", "fonts/opensans-webfont.ttf", "openSans");
DisplayContainer("Lato Light", "fonts/Lato-Light_0.ttf", "latoLight");
DisplayContainer("Lato Regular", "fonts/Lato-Regular.ttf", "latoRegular");
DisplayContainer("Lato Bold", "fonts/Lato-Bold.ttf", "latoBold");
DisplayContainer("Aller Regular", "fonts/Aller_Rg.ttf", "allerRegular");
DisplayContainer("Aller Light", "fonts/Aller_Lt.ttf", "allerLight");
DisplayContainer("Aller Bold", "fonts/Aller.ttf", "allerBold");
DisplayContainer("Aleo Regular", "fonts/Aleo-Regular.otf", "aleoRegular");
DisplayContainer("Aleo Light", "fonts/Aleo-light.otf", "aleoLight");
DisplayContainer("Aleo Bold", "fonts/Aleo-Bold.otf", "aleoBold");
DisplayContainer("Bariol", "fonts/Bariol_Regular.otf", "bariol");
DisplayContainer("Mido", "fonts/Mido.otf", "mido");
DisplayContainer("Lovelo Black", "fonts/Lovelo-Black.otf", "loveloBlack");
DisplayContainer("Lovelo Line", "fonts/Lovelo-Line-Light.otf", "loveloLight");
DisplayContainer("Code Bold", "fonts/CODE-Bold.otf", "codeBold");
DisplayContainer("Code Light", "fonts/CODE-Light.otf", "codeLight");
DisplayContainer("Chunkfive", "fonts/Chunkfive.otf", "chunkfive");
DisplayContainer("Sintony Bold", "fonts/Sintony-Bold.otf", "sintonyBold");
DisplayContainer("Sintony Regular", "fonts/Sintony-Regular.otf", "sintonyRegular");
DisplayContainer("Roboto", "fonts/Roboto-Regular.ttf", "roboto");
DisplayContainer("Varela Round", "fonts/VarelaRound-Regular.ttf", "varela");

?>


</body>
</html>