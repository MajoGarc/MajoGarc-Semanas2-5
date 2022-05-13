<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesion</title>
</head>
<body>
    <?php
        session_name("sesionChida");
        session_id("123123");
        session_start();

        if(isset($_SESION["nombre"])){
            header("location: ./dynamics/sesion.php");
        }
    ?>
    <form action="./dynamics/sesion.php" method="post" target="_self">
        <label for="">
            <input type="text" name="nombreUsuario" id="usuario">
        </label>
        <button>Iniciar Sesion</button>
    </form>

</body>
</html>