<?php
    define("DBHOST", "localhost");
    define("DBUSER", "root");
    define("DBPASSWORD", "");
    define("DB","actividad");

    function connect(){
        $conexion = mysqli_connect(DBHOST, DBUSER, DBPASSWORD, DB);
        var_dump($conexion);
        if(!$conexion){
            mysqli_error;
            echo "no se pudo conectar a la base";
        }
        return $conexion;
    }
?>