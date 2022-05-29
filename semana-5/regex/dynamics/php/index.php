<?php
    $regex = "/Francisco/";
    $cadena = "Yo soy Mauricio";

    //resgresa 1 psi un patrón se encontró en la cadena, si no, 0
    if(preg_match($regex, $cadena)===1){
        echo "si está";
    }else{
        echo"no está";
    }

    echo "</br>";

    $regex = "/loco/i";
    $cadena = "loco estoy muy loco, loco corre";

    //num de repeticiones
    echo preg_match_all($regex, $cadena);
    
    //reemplaza apariciones en la cadena
    echo preg_replace($regex, "listo", $cadena);

?>