<?php
    function despedida($msj, $usuario = "desconocido"){
        
        echo $msj."<br/>";

        echo"¡Hasta la próxima, ".$usuario."</br>";

        //return "Ya me despedí";
    }

    despedida("ya me voy");

    //$variabledelreturn = despedida("Sale adiós");

   // echo $variabledelreturn;

    //echo despedida("Sale, adios");
?>