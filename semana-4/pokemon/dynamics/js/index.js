const agregar = document.getElementById ("agregar");
const busqueda =document.getElementById ("busqueda");
const nuevopok = document.getElementById ("nuevo_pok");

agregar.addEventListener ("click", ()=> {
    nuevopok.innerHTML += '<h1>Agregar un Pokemon</h1>'+
    '<label for="nombre">Nombre <input type="text"></label>'+
    '</br></br><label for="altura">Altura <input type="text"></label>'+
    '</br></br><label for="peso">Peso <input type="text"></label>'+
    '</br></br><label for="experienciab">Experiencia base <input type="text"></label>'+
    '</br></br><button type="submit">Enviar</button>"';
});


        