<?php

require_once "seguridad.php";

$usuario = $_POST["usuario"];
$info = $_POST["input-chido"];

session_start();

$_SESSION['usuario'] = $usuario;

echo "Tú eres: " . $_SESSION['usuario'];
echo "<br>";

$algoritmo = "aes-256-cbc";
$long_vector = openssl_cipher_iv_length($algoritmo);
$iv = openssl_random_pseudo_bytes($long_vector);

$cifrado = cifrar ($info);
echo $cifrado;
echo "<br>";

$descifrado = descifrar ($cifrado);
echo $descifrado;
echo "<br>";