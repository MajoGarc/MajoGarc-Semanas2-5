<?php
    session_name("sesionChida");
    session_id("123123");
    session_start();

    $nombre =(isset($_POST['nombreUsuario']) && $_POST["nombreUsuario"]!="")? $_POST["nombreUsuario"]:false;

    if($nombre != false){
        $_SESSION["nombre"]=$nombre;
        echo "Estás iniciando seson como:".$_SESSION["nombre"];
        echo"
            <form action='./cerrar sesion.php' method='post' target='_self'>
                <button>Cerrar Sesión</button>
            </form>";

    }else if($_SESSION["nombre"]){
        echo "Estás iniciando seson como:".$_SESSION["nombre"];
        
        echo"
            <form action='./dynamics/cerrar sesion.php' method='post' target='_self'>
                <button>Cerrar Sesión</button>
            </form>";
    }else{
        header("location ../form_sesion.php");
    }
    echo "jiji ya m infiltré";
?>