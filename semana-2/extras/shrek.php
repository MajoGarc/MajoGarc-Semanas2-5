<?php
    $villanos=["Lord Farquad", "Encantador", "Hada"];
    foreach($villanos as $value){
        echo $value."<br/>";
    }
    echo"<br/>";

    $amigos=["Mejor amigo"=>"burro",
            "Segundo"=>"fiona",
            "Tercero"=>"Jengi"];
    foreach($amigos as $llave => $valor){
        echo $llave." ".$valor."<br/>";
    }
    echo"<br/>";
    
    foreach($villanos as $llave => $valor){
        echo $llave." ".$valor."<br/>";
    }
    echo"<br/>";
    
    $cadena_vill=implode("--", $villanos);
    echo $cadena_vill."<br/>";
    echo"<br/>";
    
    $arr_vill=explode("--", $cadena_vill);
    print_r($arr_vill);
    echo"<br/>";
    $texto="Hola Curso Web";
    $arr=str_split($texto, 3);
    print_r($arr);
    echo"<br/>";

    echo strtoupper($texto);
    echo"<br/>";

    echo strtolower($texto);
    echo"<br/>";

?>
