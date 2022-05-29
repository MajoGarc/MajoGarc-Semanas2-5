<?php
    require "config.php";

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

    $id = $_POST['id'];

    // DELETE FROM pokemon_types WHERE pok_id = 6;
    // DELETE FROM base_stats WHERE pok_id=6;
    // DELETE FROM pokemon_moves WHERE pok_id=6;
    // DELETE FROM pokemon_evolution_matchup WHERE pok_id = 6;
    // DELETE FROM pokemon_abilities WHERE pok_id=6;
    // DELETE FROM pokemon WHERE pok_id = 6;


    $sql = "DELETE FROM pokemon_types WHERE pok_id = $id";//elimina primero registros
    mysqli_query($con, $sql);

    $sql = "DELETE FROM base_stats WHERE pok_id = $id";//elimina primero registros
    mysqli_query($con, $sql);

    $sql = "DELETE FROM pokemon_moves WHERE pok_id = $id";//elimina primero registros
    mysqli_query($con, $sql);

    $sql = "DELETE FROM pokemon_evolution_matchup WHERE pok_id = $id";//elimina primero registros
    mysqli_query($con, $sql);

    $sql = "DELETE FROM pokemon_abilities WHERE pok_id = $id";//elimina primero registros
    mysqli_query($con, $sql);

    $sql = "DELETE FROM pokemon WHERE pok_id=$id";//elimina el pokemon
    $res = mysqli_query($con, $sql);

    if($res == true)
    {
        $respuesta = array("ok" => true);   
    }else
    {
        //echo mysqli_error($con);
        $respuesta = array("ok"=>false);
    }
    
    echo json_encode($respuesta); 
