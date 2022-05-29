<?php

define ("ALGO", "aes-256-cbc");
define("LONG_VEC", openssl_cipher_iv_length(ALGO));



function cifrar($info)
{
    $iv = openssl_random_pseudo_bytes(LONG_VEC);
    $cifrado = openssl_encrypt($info, ALGO, "micontra", 0, $iv);
    return $cifrado."|=-=|".$iv;
}
function descifrar()
{
    $componentes_cifrado = explode("|=-=|", $cifrado);
    $mensaje_cifrado = $componentes_cifrado[0];
    $iv = $componentes_cifrado[1];
    $descifrado = openssl_decrypt($mensaje_cifrado, ALGO, "micontra", 0, $iv);
    return $descifrado;
}
