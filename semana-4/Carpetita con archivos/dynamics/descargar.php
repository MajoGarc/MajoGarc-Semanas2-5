<?php
    $semana=(isset($_POST['semana']) && $_POST['semana']!='')?$_POST['semana']: "no especificó";
    if( $semana==1 || $semana==2||$semana==3)
    {
        header("Content-Type: application/pdf");
        header("Content-Disposition:attachment; filename=semana$semana.zip");
        readfile("../statics/semana$semana.zip");
        exit;
    }
    echo "<a download href='../statics/saludo.pdf'>Saludo</a><br/>";

    echo"<a download='azulito.jpg' href='../statics/azul.jpg'> Imagen Azul</a>";
?>