<?php
    echo
    "<form actyion './archivos.php' method='POST' enctype='multipart/form-data'>
        <fieldset>
            <label>Nombre
                <input type='text' name='nombre'><br/><br/>
            </label>
            <input type='file' name='archivo'><br/><br/>
            <input type='submit' value='subir'>
            <input type='reset'>
        </fieldset>
    </<form>";

    if(isset ($_FILES['archivo'])){
        $nombre=$_POST['nombre'];
        $name = $_FILES['archivo']['name'];
        $ext = pathinfo($name, PATHINFO_EXTENSION);
        echo $name;
        $name = $_FILES['archivo']['tmp_name'];
        rename($arch, "./statics/.$nombre.$ext");

    }
    else
    {
        $carpeta ("./statics");
        $archivos=[];
        $hay_archivos = true;
        $i=0;
        while($hay_archivos)
        {
            $archivo1=readdir($carpeta);
            if($archivo1 != false)
            {
                $i++;
                array_push($archivos, $archivo1);
            }    
            else
                $hay_archivos=false;
        }
        print_r($archivos);
        if(i!=0)
        {
            echo "<h1>Estos son mis archivos: </h1>";
            foreach($archivos as $llave => $value)
            {
                if($value!='.' && $value!=)
                    echo "<img src='./statics/$value'/>";
            }
        }
    }
?>